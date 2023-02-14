import { Injectable } from '@angular/core';
import { District } from 'src/assets/data/data';

@Injectable({
  providedIn: 'root'
})
export class heroservice {
  constructor() { }
  getData(){
    return District
  }
}

