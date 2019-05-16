import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ToasterService} from "angular2-toaster";
import {FeedbackViewModel} from "../login/login.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: FeedbackViewModel = {
    name: '',
    age: '',
    sex: '',
    email: '',
    feedback: ''
  };

  constructor(
              private httpClient: HttpClient,
              private toaster: ToasterService) {

  }

  ngOnInit() {
  }

  sendUser(user: FeedbackViewModel): void {
    this.httpClient.put('feedback', user)
      .subscribe(() => this.toaster.pop('success', 'Form was sent'));
  }

  sendFeedback(): void {

    const url = '/api/feedback';
    this.httpClient.post(url, this.model).subscribe(
      res => {
        this.toaster.pop('success', 'Feedback was sent');
      },
      err => {
        alert('An error has occurred while sending feedback');
      }
    );
  }
}


export interface FeedbackViewModel {
  name: string;
  age: string;
  sex: string;
  email: string;
  feedback: string;
}
