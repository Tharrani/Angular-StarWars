import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CategoryComponent} from '../components/category/category.component';
import {ItemdetailsComponent} from '../components/itemdetails/itemdetails.component';
import {ItemsincategoryComponent} from '../components/itemsincategory/itemsincategory.component';

const ROUTES: Routes = [
  { path: "", component: CategoryComponent },
  { path: "category", component: CategoryComponent },
  { path: "category/:cname", component: ItemdetailsComponent },
  {path: "category/:cname/:cid", component: ItemsincategoryComponent},
  //Has to be last - default label in switch
  { path: "**", redirectTo: "/", pathMatch: "full" }
]

@NgModule({

  imports: [ RouterModule.forRoot(ROUTES) ],
  exports: [ RouterModule ]

})
export class AppRouteModule { }