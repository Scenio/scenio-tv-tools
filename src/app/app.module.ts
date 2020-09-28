import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

/*Material imports*/
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDayjsDateModule } from '@vanrossumict/material-dayjs-adapter';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MccColorPickerModule } from 'material-community-components/color-picker';


/* Project imports*/
import { HomeComponent } from './home/home.component';
import { TimeGeneratorComponent } from './tools/time-generator/time-generator.component';
import { EditorPanelComponent } from './tools/editor-panel/editor-panel.component';
import { StreamAdvicesComponent } from './tools/stream-advices/stream-advices.component';
import { StreamChatCustomizationComponent } from './tools/stream-chat-customization/stream-chat-customization.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TimeGeneratorComponent,
    EditorPanelComponent,
    StreamAdvicesComponent,
    StreamChatCustomizationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    FlexLayoutModule,
    ReactiveFormsModule,
    /*Material imports*/
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatDatepickerModule,
    MatDayjsDateModule,
    MatExpansionModule,
    MatTabsModule,
    MccColorPickerModule.forRoot({
      empty_color: 'white',
      used_colors: ['#000000', '#FFF555'],
      enable_alpha_selector: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
