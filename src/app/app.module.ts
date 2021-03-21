import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ServicesComponent } from './components/services/services.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule } from '@angular/forms';
import { BuiltinPipe } from './pipes/builtin.pipe';
import { BuiltinPipesComponent } from './pipes/builtin-pipes/builtin-pipes.component';
import { ChangeTextDirective } from './components/about-us/change-text.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    AboutUsComponent,
    ServicesComponent,
    GalleryComponent,
    ContactUsComponent,
    HomeComponent,
    BuiltinPipe,
    BuiltinPipesComponent,
    ChangeTextDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
