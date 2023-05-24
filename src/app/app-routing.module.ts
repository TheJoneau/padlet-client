import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadletListView } from "./views/PadletListView/PadletListView";
import { PadletDetailView } from "./views/PadletDetailView/PadletDetailView";
import { PadletPublicListView } from "./views/PadletPublicListView/PadletPublicListView";
import {CreatePadletView} from "./views/CreatePadletView/CreatePadletView";
import {CreateEntryView} from "./views/CreateEntryView/CreateEntryView";
import {LoginComponent} from "./login/login.component";
import {CanActivateProtected} from "./shared/auth.guard";

const routes: Routes = [
  { path: '', component: PadletPublicListView },
  { path: 'padlets', component: PadletListView, canActivate:[CanActivateProtected] },
  { path: 'padlets/:id', component: PadletDetailView, canActivate:[CanActivateProtected] },
  { path: 'padlet/create', component: CreatePadletView, canActivate:[CanActivateProtected] },
  { path: 'padlets/:id/entry/create', component: CreateEntryView, canActivate:[CanActivateProtected] },
  { path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
