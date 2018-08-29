import { Component } from '@angular/core';
import { categoryList, itemcategory, people, film, starship, vehicle, planet, species } from './models/categorylist';
import { HttpClient} from '@angular/common/http';
import {StarWarService} from './services/starwar.service'
import { ItemsincategoryComponent } from './components/itemsincategory/itemsincategory.component';
import{PagerService} from './services/pagination'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Star Wars Canon Universe';

  categorylist: categoryList [] = [
    {name: 'Characters'},
    {name: 'Films'}, 
    {name: 'Species'},
    {name: 'Starships'},
    {name: 'Vehicles'},
    {name: 'Planets'}
  ];

  categoryname : itemcategory[];
  categoryselected : boolean = true;
  itemselected : boolean = false;
  itemdetail: boolean = false;
  people_detail: people;
  film_detail: film;
  starship_detail : starship;
  vehicle_detail: vehicle;
  planet_detail: planet;
  species_detail: species;
  item_detail: string;
  pager: any = {};
  
  constructor(private http: HttpClient, 
    private itemcategorySvc: StarWarService, private pagersvc: PagerService, private comp: ItemsincategoryComponent) { }
  
  
    select($event: string){
      this.itemselected = true;
      console.log('entering select', $event);
     // ic.InitialLoad($event);
      this.categoryselected = false;
      this.itemcategorySvc.getCategory($event)
      .then((result: itemcategory[]) => {
        this.categoryname = result;
        this.comp.cdetail = result;
        this.setPage(1, true);
        console.log('cdetail initial', this.categoryname);
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
    }

    setPage(page: number, first: boolean){
      this.pager = this.pagersvc.getPager(this.categoryname[0].count, page)
      if(this.pager.totalPages > 1 && first === false)
      {
        if(page<=0)
        {
            page=1;
        }
        else if(page>this.pager.totalPages)
        {
          page= this.pager.totalPages;
        }
        else{
          let url: string ='https://swapi.co/api/'+this.categoryname[0].category+'/?page='+page;
          console.log('entering loop', url)
          this.itemcategorySvc.loopcategory(url, this.categoryname[0].category)
            .then((result: itemcategory[]) => {
            this.categoryname = result;
              })
            .catch(err => {
            console.error('>>> error: ', err);
             })
        }
      }
    }  

  selectItem($event: itemcategory){
    console.log('itemselected ', $event)
    this.itemselected = false;
    this.categoryselected = false;
    switch($event.category){
      case 'people':
      this.itemcategorySvc.getitempeople($event.category, $event.id)
      .then((result: people) => {
        this.people_detail = result;
        this.people_detail.imgURL = 'assets/img/people/'+$event.id+'.jpg'
        this.item_detail = 'people';
        this.itemdetail = true;
        console.log('people result', this.people_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
      case 'films':
      this.itemcategorySvc.getitemfilm($event.category, $event.id)
      .then((result: film) => {
        this.film_detail = result;
        this.film_detail.imgURL='./assets/img/films/'+$event.id+'.jpg';
        this.item_detail = 'films';
        this.itemdetail = true;
        console.log('films result', this.film_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
      case 'species':
      this.itemcategorySvc.getitemspecies($event.category, $event.id)
      .then((result: species) => {
        this.species_detail = result;
        this.species_detail.imgURL='./assets/img/species/'+$event.id+'.jpg';
        this.item_detail = 'species';
        this.itemdetail = true;
        console.log('species result', this.species_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
      case 'starships':
      this.itemcategorySvc.getitemstarship($event.category, $event.id)
      .then((result: starship) => {
        this.starship_detail = result;
        this.starship_detail.imgURL='./assets/img/starships/'+$event.id+'.jpg';
        this.item_detail = 'starships';
        this.itemdetail = true;
        console.log('starship result', this.starship_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
      case 'vehicles':
      this.itemcategorySvc.getitemvehicle($event.category, $event.id)
      .then((result: vehicle) => {
        this.vehicle_detail = result;
        this.vehicle_detail.imgURL='./assets/img/vehicles/'+$event.id+'.jpg';
        this.item_detail = 'vehicles';
        this.itemdetail = true;
        console.log('vehicle result', this.vehicle_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
      case 'planets':
      this.itemcategorySvc.getitemplanet($event.category, $event.id)
      .then((result: planet) => {
        this.planet_detail = result;
        this.planet_detail.imgURL='./assets/img/planets/'+$event.id+'.jpg';
        this.item_detail = 'planets';
        this.itemdetail = true;
        console.log('planet result', this.planet_detail)
      })
      .catch(err => {
        console.error('>>> error: ', err);
      })
      break;
    }
  }

  gotocategory(){
    console.log('itemsincategory back clicked')
    this.itemselected = false;
    this.itemdetail = false;
    this.categoryselected = true;
  }

  gotocategorydetails(){
    console.log('itemdetails back clicked')
    this.itemselected = true;
    this.itemdetail = false;
    this.categoryselected = false;
    this.people_detail = null;
    this.film_detail = null;
    this.starship_detail = null;
    this.vehicle_detail = null;
    this.planet_detail = null;
    this.species_detail = null;
  }

}
