import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import * as $ from 'jquery';
import { ChangeDetectorRef } from '@angular/core';
import {Router} from "@angular/router";

import {UserService} from '../services/user.service';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  public title = 'app';
  private stompClient;
  private x = 1;
  private y = 1;
  private NICK = localStorage.getItem('NICK');

  constructor(private router: Router, private userService: UserService, private cdRef:ChangeDetectorRef) {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.userService.getServerUrl());
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.userService.setSubscription(that.stompClient.subscribe('/chat/X'+that.x+'Y'+that.y, that.handleChatMessage));
      that.userService.setSwapSubscription(that.stompClient.subscribe('/chatSwapper/'+that.NICK, that.handleSwapChat));
      $('.chat').append("<div color=red class='systemMessage'>CONNECTED TO CHAT ... WELCOME!</div>");
    });
    //this.subscription = that.stompClient.subscribe('/chat', this.handleChatMessage);
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, this.x+';'+this.y+';'+this.NICK+';'+message);
    $('#input').val('');
  }

  handleSwapChat = (message) => {
    if (message.body) {
      this.userService.normal_unsubscribe();
      var splittedString = message.body.split(/X|Y/);
      this.x = splittedString[1];
      this.y = splittedString[2];
      this.userService.setSubscription(this.stompClient.subscribe('/chat/'+message.body, this.handleChatMessage));
      $('.chat').append("<div class='systemMessage'>Chat room changed to Room: X"+this.x+"Y"+this.y+ "</div>");
    }
  }

  handleChatMessage = (message) => {
    if (message.body) {
      $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
    }
  }
}
