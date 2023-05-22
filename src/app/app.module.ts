import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PadletListView } from './views/PadletListView/PadletListView';
import {PadletDetailView} from "./views/PadletDetailView/PadletDetailView";
import { PadletListItemComponent } from './components/padlet-list-item/padlet-list-item.component';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {PadletStoreService} from "./shared/padlet-store.service";
import {CreatePadletView} from "./views/CreatePadletView/CreatePadletView";
import {CreateEntryView} from "./views/CreateEntryView/CreateEntryView";
import {EntryStoreService} from "./shared/entry-store-service";
import {RoleStoreService} from "./shared/role-store-service";
import {UserStoreService} from "./shared/user-store-service";
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './login/login.component';
import {PadletPublicListView} from "./views/PadletPublicListView/PadletPublicListView";
import {TokenInterceptorService} from "./shared/token-interceptor-service";


@NgModule({
  declarations: [
    AppComponent,
    PadletListView,
    PadletDetailView,
    PadletListItemComponent,
    CreatePadletView,
    CreateEntryView,
    LoginComponent,
    PadletPublicListView
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PadletStoreService,
    EntryStoreService,
    RoleStoreService,
    UserStoreService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
