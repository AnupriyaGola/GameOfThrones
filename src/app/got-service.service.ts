
import { Injectable } from '@angular/core';
import {HttpClient,HttpErrorResponse} from '@angular/common/http'; 

import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GotServiceService {
public allBooks;
public allCharacters;
public allHouses;
public baseUrl = 'https://anapioficeandfire.com/api/';
  constructor(private _http: HttpClient) { 
   console.log("GotServiceServive is called");

  }
public getBookData=()=> {
let myResponse = this._http.get(this.baseUrl + 'books');
return myResponse;
}

public getCharacterData=()=> {
  let myResponse = this._http.get(this.baseUrl + 'characters');
  return myResponse;
  }

  public getHouseData=()=> {
    let myResponse = this._http.get(this.baseUrl + 'houses');
    return myResponse;
    }

    public getBook=(id:number)=>{
      let response=this._http.get(this.baseUrl + 'books' + '/' +id);
      return response;
    }

    public getCharacter=(id:number)=>{
      let response=this._http.get(this.baseUrl + 'characters' + '/' +id);
      return response;
    }
    public getHouse=(id:number)=>{
      let response=this._http.get(this.baseUrl + 'houses' + '/' +id);
      return response;
    }

}
