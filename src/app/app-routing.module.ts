import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatSliderModule } from '@angular/material/slider';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes),MatSliderModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
