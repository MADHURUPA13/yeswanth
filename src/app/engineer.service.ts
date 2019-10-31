import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EngineerService {

  constructor(private h:HttpClient) { }

  get()
  {
    return this.h.get("https://hn.algolia.com/api/v1/search_by_date?tags=story")
  }
}
