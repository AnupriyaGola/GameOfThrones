import { Component, OnInit, OnDestroy } from '@angular/core';
import { GotService } from '../got.service';
import { GotServiceService } from '../got-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']

  
})
export class HomeComponent implements OnInit,OnDestroy {
  
  
  ngOnDestroy() {
    
  }
  
  public allData=[];
  public allBooks;
  public allCharacters;
  public allHouses;
  constructor(public gotServiceService:GotServiceService) { 
    console.log("home component constructor called");
  }

  ngOnInit() {

    console.log("Home componenet init called");
    //this.allBooks= this.gotServiceService.getAllbook();
   
      

      this.allBooks=this.gotServiceService.getBookData().subscribe(
        myResponse=>{
          
      
        this.allData=this.allData.concat(myResponse)
        console.log(myResponse)
        }
      );

      this.allCharacters=this.gotServiceService.getCharacterData().subscribe(
        myResponse=>{
          
      
        this.allData=this.allData.concat(myResponse)
        console.log(myResponse)
        }
      );
    
      this.allHouses=this.gotServiceService.getHouseData().subscribe(
        myResponse=>{
         
      
        this.allData=this.allData.concat(myResponse)
        console.log(myResponse)
        }
      );
    
  }

 
}
