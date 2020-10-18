import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DxDataGridModule } from 'devextreme-angular';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, DxDataGridModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
