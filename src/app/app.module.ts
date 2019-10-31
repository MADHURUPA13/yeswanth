import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EngineerService } from './engineer.service';
import { HttpClientModule } from '@angular/common/http';

// import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
    // Ng2SearchPipeModule
    
  ],
  providers: [EngineerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
