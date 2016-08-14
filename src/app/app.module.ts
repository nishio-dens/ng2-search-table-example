import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {AppComponent} from './app.component';
import {FormsModule} from "@angular/forms";
import {Ng2SearchTableModule} from "ng2-search-table/ng2-search-table";

@NgModule({
  imports: [BrowserModule, CommonModule, FormsModule, Ng2SearchTableModule],
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
