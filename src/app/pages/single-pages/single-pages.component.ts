import { Component } from '@angular/core';
import { heroservice } from 'src/app/hero.service';

@Component({
  selector: 'app-single-pages',
  templateUrl: './single-pages.component.html',
  styleUrls: ['./single-pages.component.css']
})
export class SinglePagesComponent {
single:any
constructor(private hero:heroservice){}
ngoninit():void{
  let pageid=localStorage.getItem('id');
  let num = Number(pageid)

  let singleDataArray=this.hero.getData();
  this.single=singleDataArray.filter(e=>e.id===num)
  console.log(this.single)
}
}
