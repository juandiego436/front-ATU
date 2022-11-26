import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing';
import { PageNotFoundComponent } from './pages/components/page-not-found/page-not-found.component';
import { AuthRoutingModule } from './auth/auth.routing';

const routes: Routes = [
  { path: '**', component: PageNotFoundComponent },
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
