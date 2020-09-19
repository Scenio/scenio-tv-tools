import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EditorPanelComponent } from './tools/editor-panel/editor-panel.component';
import { TimeGeneratorComponent } from './tools/time-generator/time-generator.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  { path: 'time-generator', component: TimeGeneratorComponent },
  { path: 'editor-panel', component: EditorPanelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
