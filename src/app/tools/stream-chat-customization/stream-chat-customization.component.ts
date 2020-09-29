import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stream-chat-customization',
  templateUrl: './stream-chat-customization.component.html',
  styleUrls: ['./stream-chat-customization.component.scss']
})
export class StreamChatCustomizationComponent implements OnInit {

  fontSize = "25px";
  fontColor = "#000000";
  bgColor = "#FFFFFF00";
  activateCustomSizeFont = false;
  activateCustomColorFont = false;

  streamChatConfigurationForm = new FormGroup({
    activateCustomSizeFont: new FormControl(false, []),
    activateCustomColorFont: new FormControl(false, []),
    activateCustomBgColor: new FormControl(false, []),
    fontSize: new FormControl("25", [Validators.pattern("^[0-9]*$")]),
    fontColor: new FormControl("#000000",[]),
    bgColor: new FormControl("#FFFFFF00", []),
  });

  constructor() { }

  ngOnInit(): void {

    this.streamChatConfigurationForm.get('activateCustomSizeFont').valueChanges.subscribe((activate)=>{
      this.activateCustomSizeFont = activate;
      if (activate) {
        this.fontSize = `${this.streamChatConfigurationForm.get('fontSize').value}px`;
      } else {
        this.fontSize = "25px";
      }
    });

    this.streamChatConfigurationForm.get('fontSize').valueChanges.subscribe((value)=>{
      if (this.streamChatConfigurationForm.get('activateCustomSizeFont').value === true) {
        this.fontSize = `${value}px`;
      }
    });

    this.streamChatConfigurationForm.get('activateCustomColorFont').valueChanges.subscribe((activate)=>{
      this.activateCustomColorFont = activate;
      if (activate) {
        this.fontColor = `${this.streamChatConfigurationForm.get('fontColor').value}`;
      } else {
        this.fontColor = "#000000";
      }
    });

    this.streamChatConfigurationForm.get('fontColor').valueChanges.subscribe((value)=>{
      if (this.streamChatConfigurationForm.get('activateCustomColorFont').value === true) {
        this.fontColor = `${value}`;
      }
    });

    this.streamChatConfigurationForm.get('activateCustomBgColor').valueChanges.subscribe((activate)=>{
      if (activate) {
        this.bgColor = `${this.streamChatConfigurationForm.get('bgColor').value}`;
      } else {
        this.bgColor = "#FFFFFF00";
      }
    });

    this.streamChatConfigurationForm.get('bgColor').valueChanges.subscribe((value)=>{
      if (this.streamChatConfigurationForm.get('activateCustomBgColor').value === true) {
        this.bgColor = `${value}`;
      }
    });

  }
}
