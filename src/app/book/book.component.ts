import { Component, OnInit } from '@angular/core';
import { GotServiceService } from '../got-service.service';
import {ActivatedRoute} from '@angular/router'
import { Location } from '@angular/common';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css'],
  providers: [Location]
})
export class BookComponent implements OnInit {

  private id;
  public book;
  public goback() {
    this.location.back();
  }
  constructor(private _route:ActivatedRoute,private gotservice:GotServiceService,private location:Location) { }
public getBookDetails=(id)=>{
  this.gotservice.getBook(id).subscribe(
    response=>{
      this.book=response;
      console.log(this.book);
    },
    error=>{
      console.log("some error occurred")
    }
  );
}
  ngOnInit() {
    this._route.params.subscribe(params=>{
      this.id=params['id'];
      this.getBookDetails(this.id);
    })
  }

}
