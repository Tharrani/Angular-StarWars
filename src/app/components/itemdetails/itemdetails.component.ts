import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {people, film, starship, vehicle, planet, species, } from '../../models/categorylist'
import { Url } from 'url';

@Component({
  selector: 'app-itemdetails',
  templateUrl: './itemdetails.component.html',
  styleUrls: ['./itemdetails.component.css']
})
export class ItemdetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() p: people;
  @Input() f: film;
  @Input() ss: starship;
  @Input() vh: vehicle;
  @Input() pl: planet;
  @Input() sp: species;
  
}
