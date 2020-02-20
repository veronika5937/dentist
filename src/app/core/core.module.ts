import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header';
import { FooterComponent } from './footer';
import { LogoComponent } from './logo';
import { NavigationComponent } from './navigation';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [HeaderComponent, FooterComponent, LogoComponent, NavigationComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [HeaderComponent, FooterComponent, LogoComponent]
})
export class CoreModule { }
