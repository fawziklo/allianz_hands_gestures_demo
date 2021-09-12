import { Injectable } from "@angular/core";
import * as tf from '@tensorflow/tfjs';
import { any } from "@tensorflow/tfjs";



@Injectable({
    providedIn: 'root',
  })
  export class SentimentAnalysisService {
    metaData = {ok:''};

    async loadModel(){
        return await tf.loadLayersModel('https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/model.json');
    }

    async loadMetaData(){
       return await (await fetch("https://storage.googleapis.com/tfjs-models/tfjs/sentiment_cnn_v1/metadata.json")).json();
    }

    padSequences = (sequences, metadata) => {
        return sequences.map(seq => {
          if (seq.length > metadata.max_len) {
            seq.splice(0, seq.length - metadata.max_len);
          }
          if (seq.length < metadata.max_len) {
            const pad = [];
            for (let i = 0; i < metadata.max_len - seq.length; ++i) {
              pad.push(0);
            }
            seq = pad.concat(seq);
          }
          return seq;
        });
      }


    predict(text, metadata,model) {
        const trimmed = text.trim().toLowerCase().replace(/(\.|\,|\!)/g, '').split(' ');
        const sequence = trimmed.map(word => {
          let wordIndex = metadata.word_index[word];
          if (typeof wordIndex === 'undefined') {
            return 2;
          }
          return wordIndex + metadata.index_from;
        });

        const paddedSequence = this.padSequences([sequence], metadata);
        const input = tf.tensor2d(paddedSequence, [1, metadata.max_len]);
      
        const predictOut = model.predict(input);
        const score = predictOut.dataSync()[0];
        console.warn('score',score)
        predictOut.dispose();
        return score;
      }

      getSentiment (score) {
        if (score > 0.66) {
          return `Score of ${score} is Positive`;
        }
        else if (score > 0.4) {
          return `Score of ${score} is Neutral`;
        }
        else {
          return `Score of ${score} is Negative`;
        }
      }


  }