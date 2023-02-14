import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { heroservice } from 'src/app/hero.service';
import { District } from 'src/assets/data/data';

@Component({
  selector: 'app-district-pages',
  templateUrl: './district-pages.component.html',
  styleUrls: ['./district-pages.component.css']
})
export class DistrictPagesComponent {
  constructor(private hero :heroservice,private Router:Router){}
  District= this.hero.getData()
  gotohere(id:any){
    localStorage.setItem('id',id)
    this.Router.navigate(['/single'])
  }
  }

