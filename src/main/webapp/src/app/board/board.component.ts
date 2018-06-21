import { Component } from '@angular/core';
import {Router} from "@angular/router";
import * as SockJS from 'sockjs-client';
import * as Stomp from 'stompjs';
import * as $ from 'jquery';

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {

  var port = process.env.PORT || 8080;
  private serverUrl = 'https://chatseeeker.herokuapp.com:'+port+'/socket'
  stompClient;

  cellWidth = 10;
  cellHeight = 7;
  cellColumns = [];
  cellRows = [];
  private NICK = localStorage.getItem('NICK');

  squares = Array(this.cellHeight*this.cellWidth).fill(null);
  playerX = 1;
  playerY = 1;

  isMoving = false;
  moveTimer;

  constructor(private router: Router) {

    for(var i = 0; i < this.cellWidth; i++) {
      this.cellColumns.push(i);
    }
    for(var i = 0; i < this.cellHeight; i++) {
      this.cellRows.push(i);
    }
    this.setSquare(this.playerX,this.playerY,'X');
    this.initializeWebSocketConnection();
  }

  initializeWebSocketConnection() {
    this.setSquare(0,0,serverUrl);
    const ws = new SockJS(this.serverUrl);
    this.stompClient = Stomp.over(ws);
    this.stompClient.connect({}, function(frame) {});
  }

  handleMove(x,y) {
    if( this.isInRange(x,y,1) && !this.isMoving) {
        var timeleft = 10;
        this.isMoving = true;
        this.setSquare(x,y,timeleft);
        this.moveTimer = setInterval(function(){
          timeleft--;
          this.setSquare(x,y,timeleft);
          if(timeleft <= 0) {
            clearInterval(this.moveTimer);
            this.setSquare(this.playerX,this.playerY,'');
            this.playerX = x;
            this.playerY = y;
            this.setSquare(x,y,'X');
            this.sendUpdateCoords('X'+x+'Y'+y);
            this.isMoving = false;
          }
        }.bind(this),1000);
    }
  }

  isInRange(x,y,range) {
    return Math.abs(this.playerX-x) <= range && 
      Math.abs(this.playerY-y) <= range &&
      (this.playerX != x || this.playerY != y);
  }

  sendUpdateCoords(message) {
    this.stompClient.send('/app/update/coords' , {}, this.NICK+";"+message);
  }

  getSquare(x,y) {
    return this.squares[x+y*this.cellWidth];
  }

  setSquare(x,y,s) {
    this.squares[x+y*this.cellWidth] = s;
  }
}
