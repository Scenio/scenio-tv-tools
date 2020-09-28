import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-stream-chat-customization',
  templateUrl: './stream-chat-customization.component.html',
  styleUrls: ['./stream-chat-customization.component.scss']
})
export class StreamChatCustomizationComponent implements OnInit {

  streamChatConfigurationForm = new FormGroup({
    activateCustomSizeFont: new FormControl(false, []),
    activateCustomColorFont: new FormControl(false, []),
    activateCustomBgColor: new FormControl(false, []),
    fontSize: new FormControl("25", [Validators.pattern("^[0-9]*$")]),
    fontColor: new FormControl("#000000", [Validators.pattern("^[0-9]*$")]),
    bgColor: new FormControl("rgba(0, 0, 0, 0)", [Validators.pattern("^[0-9]*$")]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  getFontSize() {
    if (this.streamChatConfigurationForm.get('activateCustomSizeFont').value) {
      const fontSize = this.streamChatConfigurationForm.get('fontSize').value;
      const fontSizeNumber = Number(fontSize)

      if (!isNaN(fontSizeNumber)){
        if (fontSizeNumber > 0) {
          return `${fontSize}px`;
        } else {
          return "25px";
        }
      } else {
        return "25px";
      }
    }

    return "25px";
  }

  getFontColor() {
    if (this.streamChatConfigurationForm.get('activateCustomColorFont').value) {
      const fontColor = this.streamChatConfigurationForm.get('fontColor').value;
      return fontColor;
    } else {
      return "#000000";
    }
  }

  getBgColor() {
    if (this.streamChatConfigurationForm.get('activateCustomBgColor').value) {
      const bgColor = this.streamChatConfigurationForm.get('bgColor').value;
      return bgColor;
    } else {
      return "#FFFFFF";
    }
  }
}
