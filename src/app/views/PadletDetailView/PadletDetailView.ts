import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {Padlet} from "../../types/Padlet";
import {Entry} from "../../types/Entry";
import {User} from "../../types/User";

@Component({
  selector : 'pl-padlet-detail-view',
  templateUrl : './PadletDetailView.html',
  styles : []
})
export class PadletDetailView implements OnInit {

  @Input() padlet : Padlet | undefined
  @Output() showListEvent = new EventEmitter<any>();

  showPadletList() {
    this.showListEvent.emit();
  }

  entries: Entry[] = [] ;

  ngOnInit() {
   /* this.entries = [
      new Entry(
        1,
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        'First Entry',
        'Example Text example Text',
        1,
        1,
        new User(1,
          'Max',
          'Müller',
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'Ersteller.müller@gmail.com',
          'url')
      ),
      new Entry(
        2,
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        'Second Entry',
        'Example Text example Text',
        1,
        1,
        new User(1,
          'Max',
          'Müller',
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'Ersteller.müller@gmail.com',
          'url')
      )];*/
  }
}
