import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {GenerateComponent} from './pages/generate/generate.component';

const routes: Routes = [
  {
    path: '', component: GenerateComponent, pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
