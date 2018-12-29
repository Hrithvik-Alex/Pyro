import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HostPageComponent } from './components/host-page/host-page.component';
import { JoinPageComponent } from './components/join-page/join-page.component';

const routes: Routes = [
  {path: "host", component: HostPageComponent},
  {path: "join", component: JoinPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
