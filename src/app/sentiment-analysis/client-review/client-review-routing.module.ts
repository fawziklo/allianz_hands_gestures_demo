import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientReviewComponent } from './client-review.component';

const routes: Routes = [{ path: '', component: ClientReviewComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientReviewModule { }
