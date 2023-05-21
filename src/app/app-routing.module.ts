import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadletListView } from "./views/PadletListView/PadletListView";
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";
import {CreatePadletView} from "./views/CreatePadletView/CreatePadletView";
import {CreateEntryView} from "./views/CreateEntryView/CreateEntryView";

const routes: Routes = [
  { path: '', redirectTo: 'padlets', pathMatch: 'full' },
  { path: 'padlets', component: PadletListView },
  { path: 'padlets/:id', component: PadletDetailView },
  { path: 'padlets/:id/padlet', component: CreatePadletView },
  { path: 'padlets/:id/entry', component: CreateEntryView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})

export class AppRoutingModule { }
