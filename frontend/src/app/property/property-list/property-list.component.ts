import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HousingService} from 'src/app/services/housing.service'
import { IProperty } from '../IProperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent = 1;
  properties: Array<IProperty>;

  constructor( private route: ActivatedRoute, private housingService: HousingService) { }

  ngOnInit(): void {
    if  (this.route.snapshot.url.toString()) {
      this.SellRent = 2; // Mezns we are rent-property url else we are on base url
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data=>{
        this.properties=data;
        console.log(data);

      }, error => {
        console.log(error);
      }
    );
  }

}
