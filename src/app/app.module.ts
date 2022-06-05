import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { IoComponent } from './io/io.component';
import { MeComponent } from './me/me.component';
import { MeStessoComponent } from './me-stesso/me-stesso.component';
import { AppRoutes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    IoComponent,
    MeComponent,
    MeStessoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
