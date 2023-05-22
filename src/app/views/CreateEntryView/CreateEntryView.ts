import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";

@Component({
  selector : 'pl-padlet-detail-view',
  templateUrl : './CreateEntryView.html',
  styles : []
})
export class CreateEntryView implements OnInit {
  padlet : Padlet | undefined;

  constructor(private route: ActivatedRoute, private pl:PadletStoreService){
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
}
