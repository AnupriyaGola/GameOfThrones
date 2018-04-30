import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

//import statement for service
import { GotService } from './got.service';
import { GotServiceService } from './got-service.service';
import {  HttpClientModule } from '@angular/common/http';

import { SortPipe } from './sort.pipe';
import {FormsModule} from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { SelectPipe } from './select.pipe';
import { SearchPipe } from './search.pipe';
import { BookComponent } from './book/book.component';
import { CharacterComponent } from './character/character.component';
import { HouseComponent } from './house/house.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    
    SortPipe,
    FilterPipe,
    SelectPipe,
    SearchPipe,
    BookComponent,
    CharacterComponent,
    HouseComponent
    
   
  ],
  imports: [
    HttpClientModule,FormsModule,
    BrowserModule,
    RouterModule.forRoot([
      {path:'home',component:HomeComponent},
      
      {path:'',redirectTo:'home',pathMatch:'full'},

     {path:'book/:id',component:BookComponent},
    
     {path:'house/:id', component:HouseComponent},
   
     {path:'character/:id',component:CharacterComponent}

 
    ])
  ],
 

  providers: [GotService,GotServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
