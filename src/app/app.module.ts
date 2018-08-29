import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { ItemsincategoryComponent } from './components/itemsincategory/itemsincategory.component';
import { ItemdetailsComponent } from './components/itemdetails/itemdetails.component';

import { HttpClientModule} from '@angular/common/http';
import {StarWarService} from './services/starwar.service'
import {PagerService} from './services/pagination'

import {AppRouteModule} from './services/approute.module';
import {NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ItemsincategoryComponent,
    ItemdetailsComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, AppRouteModule, NgxPaginationModule
  ],
  providers: [StarWarService, PagerService, ItemsincategoryComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
