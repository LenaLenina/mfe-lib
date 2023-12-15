import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MfeRoutingModule } from './mfe.routing.module';
import { MfeComponent } from './mfe.component';
import { TodoListModule } from './todo-list/todo-list.module';


@NgModule({
  declarations: [
    MfeComponent
  ],
  imports: [
    BrowserModule,
    MfeRoutingModule,
    TodoListModule,
  ],
  exports: []
})
export class MfeModule { }
