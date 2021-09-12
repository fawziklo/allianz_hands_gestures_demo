import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ClientReviewComponent } from './client-review/client-review.component';
import { ClientReviewModule } from './client-review/client-review-routing.module';
import { SentimentAnalysisService } from './sentiment-analysis.service';


@NgModule({
  declarations: [ClientReviewComponent],
  imports: [
    CommonModule,
    ClientReviewModule
  ],
  providers: [SentimentAnalysisService]
})
export class SentimentAnalysisModule { }
