import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule } from '@angular/router';
import { ServicesComponent } from './services/services.component';



@NgModule({
  declarations: [HomeComponent, ServicesComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent}])
  ]
})
export class HomeModule { }
