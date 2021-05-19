import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { PageRoutingModule } from "./page-routing.module";

import { PageComponent } from "./page.component";
import { GrafosComponent } from './grafos/grafos.component';


@NgModule({
  imports: [
    CommonModule,
    PageRoutingModule
  ],
  exports: [],
  declarations: [
    PageComponent,
    GrafosComponent
  
  ],
  providers: [],
})
export class PageModule { }
