import {Component, OnInit} from "@angular/core";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {AuthenticationStoreService} from "../../shared/authentication-store-service";

@Component({
  selector : 'pl-padlet-list-view',
  templateUrl : './PadletListView.html',
  styles : []
})

export class PadletListView implements OnInit {
  constructor (
    private pl:PadletStoreService,
    private authService: AuthenticationStoreService) {

  }

  padlets: Padlet[] = [] ;

  ngOnInit() {
    this.pl.getAll().subscribe(res => {
      console.log(res)
      this.padlets=res;
    });
  }

  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  logout() {
    this.authService.logout();
  }

}












    /*this.padlets = [
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
  }*/


