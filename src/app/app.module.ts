import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgGridModule } from "ag-grid-angular";
import { AgGridComponent } from './ag-grid/ag-grid.component';
import { PrimeNgTreeTableComponent } from './prime-ng-tree-table/prime-ng-tree-table.component';

@NgModule({
  declarations: [
    AppComponent,
    AgGridComponent,
    PrimeNgTreeTableComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
