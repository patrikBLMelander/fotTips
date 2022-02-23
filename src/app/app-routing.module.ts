import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './public/default/default.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

const routes: Routes = [
  {path: '', component: DefaultComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
}
