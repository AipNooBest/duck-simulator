import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DucksComponent } from './ducks/ducks.component';
import { FormsModule } from '@angular/forms';
import { DuckCreatorComponent } from './duck-creator/duck-creator.component';
import { LogComponent } from './log/log.component';
import { LakeComponent } from './lake/lake.component';

@NgModule({
  declarations: [
    AppComponent,
    DucksComponent,
    DuckCreatorComponent,
    LogComponent,
    LakeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
