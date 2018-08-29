import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { itemcategory } from '../../models/categorylist';
import {PagerService} from '../../services/pagination'
import {StarWarService} from '../../services/starwar.service'

@Component({
  selector: 'app-itemsincategory',
  templateUrl: './itemsincategory.component.html',
  styleUrls: ['./itemsincategory.component.css']
})
export class ItemsincategoryComponent implements OnInit {

  constructor(private pagerSVC: PagerService, private starwarsvc: StarWarService) { }

  ngOnInit() {
  }

  @Input() cdetail : itemcategory[];
  @Output() selectIteminCategory = new EventEmitter<itemcategory>();


  IteminCategory(i: number)
  {
    console.log('entering comp select', i)
    this.selectIteminCategory.next(this.cdetail[i]);
  }

}
