import { AfterContentChecked, AfterViewInit, Component, OnInit } from '@angular/core';
import { any } from '@tensorflow/tfjs';
import { SentimentAnalysisService } from '../sentiment-analysis.service';

@Component({
  selector: 'app-client-review',
  templateUrl: './client-review.component.html',
  styleUrls: ['./client-review.component.css']
})
export class ClientReviewComponent implements OnInit {

  ok : any;
  constructor(private sentimentAnalysisService: SentimentAnalysisService) { }

  ngOnInit(): void {
    this.sentimentAnalysisService.loadMetaData().then(metaData => {
      this.sentimentAnalysisService.loadModel().then(model => {
              this.sentimentAnalysisService.predict('',metaData,model);
      })
    })
    
  }



}
