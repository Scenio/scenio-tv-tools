import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';

import mergeImages from 'merge-images';
import * as dayjs from 'dayjs';
import * as utc from 'dayjs/plugin/utc';
import * as timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

@Component({
  selector: 'app-time-generator',
  templateUrl: './time-generator.component.html',
  styleUrls: ['./time-generator.component.scss']
})
export class TimeGeneratorComponent implements OnInit {

  public imagePath;
  imgURL: any;
  public imageErrorLoading: string;

  finalImageSrc: string;

  // firstColumnLocations = ['es-ES', 'es-PY', 'es-BO', 'es-PE', 'es-CO', 'es-NI']
  // secondColumnLocations = ['es-AR', 'es-MX', 'es-VE', 'es-SV', 'es-DO', 'es-EC']
  // thirdColumnLocations = ['es-UY', 'es-CL', 'es-CU', 'es-HN', 'es-PA', 'es-CR']

  firstColumnLocations = ['Europe/Madrid', 'America/Asuncion', 'America/La_Paz', 'America/Lima', 'America/Bogota', 'America/Managua']
  secondColumnLocations = ['America/Argentina/Buenos_Aires', 'America/Mexico_City', 'America/Caracas', 'America/El_Salvador', 'America/Santo_Domingo', 'America/Guayaquil']
  thirdColumnLocations = ['America/Montevideo', 'America/Santiago', 'America/Havana', 'America/Tegucigalpa', 'America/Panama', 'America/Costa_Rica']

  profileForm = new FormGroup({
    hourString: new FormControl('', [Validators.required, this.validateHour]),
    showAdvancedOptions: new FormControl(false, []),
    datetime: new FormControl(dayjs(), []),
    title: new FormControl('', [Validators.maxLength(45)])
  });

  constructor() { }

  ngOnInit(): void {

    this.profileForm.get('showAdvancedOptions').valueChanges.subscribe(active => {
      if (!active) {
        this.profileForm.get('datetime').setValue(dayjs());
      }
    })

  }

  onFileInput(files) {

    if (files.length === 0) {
      return;
    }

    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.imageErrorLoading = 'Solo imagenes';
      return;
    }
    this.imageErrorLoading = '';

    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }

  validateHour(control: AbstractControl): {[key: string]: any} | null {

    var hasError = false;
    let errors = {};

    var hourRegex = /(\d\d):(\d\d)/gm;
    let hourValue: string = control.value;

    let regexResult = hourRegex.exec(hourValue);

    if (regexResult == null || regexResult.length == 0) {
      hasError = true;
      errors['wrongFormat'] = 'La hora tiene que tener formato hh:mm';
      return errors;
    }

    let hour = parseInt(regexResult[1]);
    let minute = parseInt(regexResult[2]);

    if (hour < 0 || hour > 23) {
      hasError = true;
      errors['wrongHour'] = 'La hora tiene que estar entre 0 y 23';
    }

    if (minute < 0 || minute > 59) {
      hasError = true;
      errors['wrongMinute'] = 'Los minutos tienen que estar entre 0 y 59';
    }

    if (hasError) {
      return errors;
    } else {
      return null;
    }
  }

  getImageWithText() {

    if (this.profileForm.invalid) {
      return;
    }

    var hourRegex = /(\d\d):(\d\d)/gm;
    let hourValue: string = this.profileForm.get('hourString').value;

    let regexResult = hourRegex.exec(hourValue);
    let hour = parseInt(regexResult[1]);
    let minute = parseInt(regexResult[2]);

    var now = this.profileForm.get('datetime').value;
    now = now.tz('Europe/Madrid');
    now = now.hour(hour);
    now = now.minute(minute);
    now = now.second(0);
    now = now.millisecond(0);

    var circle_canvas = document.createElement("canvas") as HTMLCanvasElement;
    circle_canvas.width = 600;
    circle_canvas.height = 600;
    var context = circle_canvas.getContext("2d");
    var imagePath = 'assets/time-generator/banderitas.png';

    // Draw Image function
    var img = new Image();
    img.src = imagePath;
    img.onload = () => {
        context.drawImage(img, 0, 0, 600, 600);
        context.lineWidth = 0.2;
        context.fillStyle = "#000000";
        context.strokeStyle = "#FFFFFF";
        context.font = "600 20px roboto";
        //context.shadowColor = "rgba(255,255,255,0.5)";
        //context.shadowBlur = 4;
        this.writeColumnsText(context, now);
        if (this.profileForm.get('title').value != '') {
          this.writeTitle(context, this.profileForm.get('title').value);
        }
        var canvasDataUrl = circle_canvas.toDataURL();

        mergeImages([this.imgURL, canvasDataUrl]).then(b64 => {
          this.finalImageSrc = b64;
        });

    };
  }

  private writeColumnsText(context, date) {

    this.firstColumnLocations.forEach((timezone, index) => {

      // var formattedHour = String( this.negativeModule((hour + timezone), 24)).padStart(2, '0');
      // var formattedMinute = String(minute).padStart(2, '0');

      let timezoneDated = date.tz(timezone);

      var formattedHour = String(timezoneDated.hour()).padStart(2, '0');
      var formattedMinute = String(timezoneDated.minute()).padStart(2, '0');

      context.fillText(`${formattedHour}:${formattedMinute}`, 130, 120 + 82.5*index);
    });

    this.secondColumnLocations.forEach((timezone, index) => {

      // var formattedHour = String(this.negativeModule((hour + timezone), 24)).padStart(2, '0');
      // var formattedMinute = String(minute).padStart(2, '0');

      let timezoneDated = date.tz(timezone);

      var formattedHour = String(timezoneDated.hour()).padStart(2, '0');
      var formattedMinute = String(timezoneDated.minute()).padStart(2, '0');

      context.fillText(`${formattedHour}:${formattedMinute}`, 300, 120 + 82.5*index);
    });

    this.thirdColumnLocations.forEach((timezone, index) => {

      // var formattedHour = String(this.negativeModule((hour + timezone), 24)).padStart(2, '0');
      // var formattedMinute = String(minute).padStart(2, '0');

      let timezoneDated = date.tz(timezone);

      var formattedHour = String(timezoneDated.hour()).padStart(2, '0');
      var formattedMinute = String(timezoneDated.minute()).padStart(2, '0');

      context.fillText(`${formattedHour}:${formattedMinute}`, 470, 120 + 82.5*index);
    });
  }

  private writeTitle(context: CanvasRenderingContext2D, title: string) {
    let width = context.measureText(title).width;
    let initialPosition = 300 - width/2;

    context.fillText(title, initialPosition, 50);
    //context.strokeText(title, initialPosition, 50);
  }

  private negativeModule(n, mod) {
    return ((n%mod)+mod)%mod;
  }

  downloadImage() {
    var link = document.createElement('a'); // create an anchor tag
    link.setAttribute('href', this.finalImageSrc);
    link.setAttribute('target', '_blank');
    link.setAttribute('download', 'imagen.png');

    if (document.createEvent) {
      var evtObj = document.createEvent('MouseEvents');
      evtObj.initEvent('click', true, true);
      link.dispatchEvent(evtObj);
    } else if (link.click) {
        link.click();
    }
  }
}
