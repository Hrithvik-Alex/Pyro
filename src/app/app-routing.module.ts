import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { HostPageComponent } from './components/host-page/host-page.component';
import { JoinPageComponent } from './components/join-page/join-page.component';
import { RoomPageComponent } from './components/room-page/room-page.component';

const routes: Routes = [
  {path: 'home', component: HomePageComponent},
  {path: "host", component: HostPageComponent},
  {path: "join", component: JoinPageComponent},
  {path: "room/:id", component: RoomPageComponent},
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
