import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {Padlet} from "../../types/Padlet";
import {Entry} from "../../types/Entry";
import {User} from "../../types/User";
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {EntryStoreService} from "../../shared/entry-store-service";

@Component({
  selector : 'pl-padlet-list-view',
  templateUrl : './CreateEntryView.html',
  styles : []
})

export class CreateEntryView implements OnInit {
  constructor (private pl:EntryStoreService) {

  }

  padlets: Padlet[] = [] ;

  ngOnInit() {
    //this.pl.getAll().subscribe(res => {
      //this.padlets=res;
    //});
  }

}
