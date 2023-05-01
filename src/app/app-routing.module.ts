import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';

const routes: Routes = [
 { path: '', pathMatch: 'full', redirectTo: 'auth/sign-in' },
  {
    path: 'auth/sign-in',
    component: LoginComponent,
    title: 'Administrator: Sign In',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
