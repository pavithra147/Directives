import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MathsService } from './Services/maths.service';
import { ComponentforserviceComponent } from './componentforservice/componentforservice.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentforserviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [MathsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
