package com.tai.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

import java.text.SimpleDateFormat;
import java.util.Date;

@Controller
public class WebSocketController {

    private final SimpMessagingTemplate template;
    private int lastID = 0;

    @Autowired
    WebSocketController(SimpMessagingTemplate template) {
        this.template = template;
    }

    @MessageMapping("/send/message")
    public void onReceivedMesage(String message) {
        String[] splittedMessage = message.split(";");
        StringBuilder outputMessage = new StringBuilder();
        for(int i = 3; i < splittedMessage.length; i++) {
            outputMessage.append(splittedMessage[i]);
        }
        System.out.println("/chat/X"+splittedMessage[0]+"Y"+splittedMessage[1]+"\n"+ new SimpleDateFormat("HH:mm").format(new Date()) + "- " + outputMessage);
        this.template.convertAndSend("/chat"+"/X"+splittedMessage[0]+"Y"+splittedMessage[1], "[" + new SimpleDateFormat("HH:mm").format(new Date()) +" "+splittedMessage[2]+ "]: " + outputMessage);
    }

    @MessageMapping("/update/coords")
    public void onReceivedCoordsUpdate(String message) {
        //TODO updating database on player coordinates
        String[] splitted = message.split(";");
        System.out.println("/chatSwapper/"+splitted[0] +"\n"+ splitted[1]);
        this.template.convertAndSend("/chatSwapper/"+splitted[0], splitted[1]);
    }
}