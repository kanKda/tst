import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { ListModule } from '@kan_kda/test-lib';
import { BorderModule } from '@kan_kda/test-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ListModule,
    BorderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
