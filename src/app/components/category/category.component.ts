import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { categoryList } from '../../models/categorylist';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() { }

  @Input() category : categoryList;
  @Output() selectCategory = new EventEmitter<string>();

  ngOnInit() {
  }

  categoryselect()
  {
    this.selectCategory.next(this.category.name);
    console.log('category selected: ', this.category.name)
  }
}
