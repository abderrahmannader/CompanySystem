import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './Components/test/test.component';
import { PersonInformationComponent } from './Components/person-information/person-information.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PersonInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
