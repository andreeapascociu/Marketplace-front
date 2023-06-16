import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { UserProfileTableComponent } from './pages/user-profile-table/user-profile-table.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'SignIn', component: SignInComponent },
  {path: 'dashboard', component: DashboardComponent},
  {path: 'UserProfile', component: UserProfileComponent},
  {path: 'UserProfileTable', component: UserProfileTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
