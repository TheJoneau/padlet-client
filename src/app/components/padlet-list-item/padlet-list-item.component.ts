import { Component, OnInit, Input} from '@angular/core';
import {Padlet} from "../../types/Padlet";

@Component({
  selector: 'a.pl-padlet-list-item',
  templateUrl: './padlet-list-item.component.html',
  styles: [
  ]
})
export class PadletListItemComponent implements OnInit {

  @Input() padlet : Padlet | undefined

    ngOnInit(): void {

    }

}
