import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {switchMap} from 'rxjs/operators';
import {Subscription,timer} from 'rxjs';
import { EngineerService } from './engineer.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'myapp';
  details
  data
  subscrition:Subscription;
  statusText:string;
  constructor(private ht:HttpClient,private hh:EngineerService)
  {

  }
  ngOnInit()
  {
    this.subscrition=timer(0,10000).pipe(
      switchMap(()=> this.hh.get())
      ).subscribe(resp=>{console.log(resp)
      this.data=resp
      this.details=this.data.hits});
     ;
  
  }
  h
  submit(e)
  {
   console.log(e)
   this.h=e
  }
}
