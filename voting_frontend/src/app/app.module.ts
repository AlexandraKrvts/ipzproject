import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import {ToasterModule, ToasterService} from 'angular2-toaster';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import {FormsModule} from "@angular/forms";

import { NewvotingComponent } from './newvoting/newvoting.component';
import {RouterModule} from "@angular/router";


const routes = [
  { path: 'login', component: LoginComponent},
{path: 'newvoting', component: NewvotingComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    AnswerComponent,
    LoginComponent,
    NewvotingComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToasterModule.forRoot(),
    FormsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [ToasterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
