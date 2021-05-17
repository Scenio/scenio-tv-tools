import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as dayjs from 'dayjs';
import 'dayjs/locale/es';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  title = 'Scenio Tools';

  constructor(private swUpdate: SwUpdate){
    this.checkUpdate();
  }

  ngOnInit(): void {
    dayjs.locale('es');
  }

  checkUpdate() {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if (confirm('Actualización disponible. Se va a recargar la página.')) {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        } else {
          this.swUpdate.activateUpdate().then(() => document.location.reload());
        }
      });
      this.swUpdate.checkForUpdate();
    }
}
}
