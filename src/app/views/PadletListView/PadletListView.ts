import {Component, OnInit} from "@angular/core";
import {Padlet} from "../../types/Padlet";
import {Entry} from "../../types/Entry";
import {User} from "../../types/User";

@Component({
  selector : 'pl-padlet-list-view',
  templateUrl : './PadletListView.html',
  styles : []
})

export class PadletListView implements OnInit {
  padlets: Padlet[] = [] ;

  ngOnInit() {
    this.padlets = [
      new Padlet(1,
        'First Padlet',
        2,
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        [new Entry(
          1,
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'first Entry',
          'Beispielstext',
          1,
          1,
          new User(1,
            'Marie',
            'Mayer',
            new Date(2017, 3, 1),
            new Date(2017, 3, 1),
            'maire.mayer@gmail.com',
            'url')),
        ],
        [new User(
          1,
          'Max',
          'Msuterman',
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'max.musterman@gmail.com',
          'url')
        ],
        new User(1,
          'Lisa',
          'Müller',
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'Ersteller.müller@gmail.com',
          'url'),
        true,
      ),

    new Padlet(2,
      'Second Padlet',
      2,
      new Date(2017, 3, 1),
      new Date(2017, 3, 1),
      [new Entry(
        1,
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        'first Entry',
        'Beispielstext',
        1,
        1,
        new User(1,
          'Marie',
          'Mayer',
          new Date(2017, 3, 1),
          new Date(2017, 3, 1),
          'maire.mayer@gmail.com',
          'url')),
      ],
      [new User(
        1,
        'Max',
        'Msuterman',
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        'max.musterman@gmail.com',
        'url')
      ],
      new User(1,
        'Max',
        'Müller',
        new Date(2017, 3, 1),
        new Date(2017, 3, 1),
        'Ersteller.müller@gmail.com',
        'url'),
      false,
    )];
  }
}
