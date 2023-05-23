import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {AuthenticationStoreService} from "../../shared/authentication-store-service";

@Component({
  selector : 'pl-padlet-detail-view',
  templateUrl : './PadletDetailView.html',
  styles : []
})
export class PadletDetailView implements OnInit {
  padlet : Padlet | undefined;

  constructor(
    private route: ActivatedRoute,
    private pl:PadletStoreService,
    public authService: AuthenticationStoreService,
    private router: Router,
  ){
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      const id : number = Number(params.get('id'));

      this.pl.getOne(id).subscribe(res => {
        this.padlet=res;
        console.log(res);
      });
    });
  }

  removePadlet() {
    if (confirm('Do you really want to delete this padlet?') && this.padlet) {
      this.pl.remove(this.padlet?.id).subscribe((res:any) => this.router.navigate(['../'],
        { relativeTo: this.route }));
    }
  }


}













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
