import { Component } from '@angular/core';
// import Stomp from 'stompjs';
// import SockJS from 'sockjs-client';
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
// import $ from 'jquery';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 // private serverUrl = 'http://192.168.1.119:8888/socket';
  private serverUrl = 'http://localhost:8080/socket'
  public title = 'Chat';
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
