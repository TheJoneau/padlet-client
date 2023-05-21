import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadletListView } from "./views/PadletListView/PadletListView";
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";

const routes: Routes = [
  { path: 'padlet', component: PadletListView },
  { path: 'padlet/:id', component: PadletDetailView }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
