import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumdsComponent } from './breadcrumds/breadcrumds.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    BreadcrumdsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  exports: [
    BreadcrumdsComponent,
    HeaderComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
