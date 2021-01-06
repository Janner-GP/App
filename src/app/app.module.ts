import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//SERVICIOS
import { MomentsService } from "./services/moments.service";

//RUTAS
import { AppRoutingModule } from './app-routing.module';

//COMPONENTS
import { AppComponent } from './app.component';
import { MomentsComponent } from './components/moments/moments.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { MomentComponent } from './components/moment/moment.component';

@NgModule({
  declarations: [
    AppComponent,
    MomentsComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    MomentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    MomentsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
