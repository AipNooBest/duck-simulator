import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DucksComponent } from './ducks/ducks.component';
import {FormsModule} from '@angular/forms';
import { DuckCreatorComponent } from './duck-creator/duck-creator.component';
import { LogComponent } from './log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    DucksComponent,
    DuckCreatorComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
