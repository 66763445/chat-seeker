import { Component } from '@angular/core';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import * as $ from 'jquery';

@Component({
  selector: 'chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent {

  private serverUrl = 'http://localhost:8080/socket'
  public title = 'app';
  private stompClient;

  constructor() {
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    const that = this;
    this.stompClient.connect({}, function(frame) {
      that.stompClient.subscribe('/chat', (message) => {
        if (message.body) {
          $('.chat').append('<div class=\'message\'>' + message.body + '</div>');
          console.log(message.body);
        }
      });
    });
  }

  sendMessage(message) {
    this.stompClient.send('/app/send/message' , {}, message);
    $('#input').val('');
  }

}
