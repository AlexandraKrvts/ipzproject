import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Unsubscribable} from 'rxjs';
import {UserService} from '../services/user.service';
import {QuestionService} from "../services/question.service";
import {HttpClient} from "@angular/common/http";
import {ToasterService} from "angular2-toaster";
import {NewvotingModel} from "./new.voting.model";




@Component({
  selector: 'app-newvoting',
  templateUrl: './newvoting.component.html',
  styleUrls: ['./newvoting.component.css']
})
export class NewvotingComponent implements OnInit, OnDestroy {


  title = 'Voting Application';
  private intervalSubscription: Unsubscribable;


  votings: NewvotingModel[] = [];
  messages: NewvotingModel[] = [];



  constructor(private userService: UserService,
              private questionService: QuestionService,
              private httpClient: HttpClient,
              private toaster: ToasterService
  ) {
  }

  ngOnInit(): void {
    this.userService.initUser();
    this.intervalSubscription = interval(1000).subscribe(() => this.questionService.getLastQuestion());
  }


  sendMessage(message: string): void {
    this.httpClient.put('chat', message)
      .subscribe(() => this.toaster.pop('success', 'Message was sent.'));

    this.title = message;
    const messages = new NewvotingModel();
    messages.description = message;
    this.messages.push(messages);
  }

  ngOnDestroy(): void {
    if (this.intervalSubscription) {
      this.intervalSubscription.unsubscribe();
    }
  }
  add(value: string): void {
    this.title = value;
    const v = new NewvotingModel();
    v.description = value;
    this.votings.push(v);
  }



}

