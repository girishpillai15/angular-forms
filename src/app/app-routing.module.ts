import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DsahboardComponent } from './dsahboard/dsahboard.component';
import { LoginComponent } from './login/login.component';
import { TableComponent } from './table/table.component';
import { TableheaderComponent } from './tableheader/tableheader.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {path:'dashboard',component:DsahboardComponent},
  {path:'table',component:TableComponent},
  {path:'tables',component:TableheaderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
