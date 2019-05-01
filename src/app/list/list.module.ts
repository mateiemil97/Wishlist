import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListsComponent } from './lists.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: 'wishlist',
        component: ListsComponent
      }
    ])
  ],
  declarations: [
    ListsComponent
  ],
  exports: [
    ListsComponent,
  ]
})
export class ListModule { }
