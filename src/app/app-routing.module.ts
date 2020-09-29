import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorPanelComponent } from './tools/editor-panel/editor-panel.component';
import { StreamAdvicesComponent } from './tools/stream-advices/stream-advices.component';
import { StreamChatCustomizationComponent } from './tools/stream-chat-customization/stream-chat-customization.component';
import { TimeGeneratorComponent } from './tools/time-generator/time-generator.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'time-generator', component: TimeGeneratorComponent },
  { path: 'editor-panel', component: EditorPanelComponent },
  { path: 'stream-advices', component: StreamAdvicesComponent },
  { path: 'stream-chat-customizations', component: StreamChatCustomizationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
