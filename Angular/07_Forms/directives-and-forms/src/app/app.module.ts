import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { MyRouterLinkDirective } from './my-router-link.directive';
import { MyStructuralDirective } from './my-structural.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaxCountDirective } from './max-count.directive';

@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    MyRouterLinkDirective,
    MyStructuralDirective,
    MaxCountDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, // Template Driven Appraoch
    ReactiveFormsModule, // Reactive Driven Approach
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
