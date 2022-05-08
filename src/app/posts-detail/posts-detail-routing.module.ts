import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsDetailPage } from './posts-detail.page';

const routes: Routes = [
  {
    path: '',
    component: PostsDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsDetailPageRoutingModule {}
