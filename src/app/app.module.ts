import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { RawdataComponent } from './entity/rawdata/rawdata.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchComponent } from './entity/rawdata/search/search.component';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RawdataComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
