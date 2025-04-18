import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PagesRoutingModule } from './pages/pages.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [



  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', component: NotfoundComponent }
]

@NgModule({
  declarations: [

  ],
  imports: [
    RouterModule.forRoot( routes ),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {


}
