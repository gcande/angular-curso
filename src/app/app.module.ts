import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// modulos creados
import { HeroeModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';



@NgModule({
    declarations: [
        AppComponent,
        
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HeroeModule,
        ContadorModule
    ]
})
export class AppModule { }
