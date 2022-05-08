import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostsDetailPageRoutingModule } from './posts-detail-routing.module';

import { PostsDetailPage } from './posts-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostsDetailPageRoutingModule
  ],
  declarations: [PostsDetailPage]
})
export class PostsDetailPageModule {}
