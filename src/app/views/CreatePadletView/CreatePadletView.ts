import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookFormErrorMessages, ErrorMessage} from "./padlet-form-error-messages";

@Component({
  selector : 'pl-padlet-detail-view',
  templateUrl : './CreatePadletView.html',
  styles : []
})
export class CreatePadletView implements OnInit {
  padlet: Padlet | undefined;

  padletForm: FormGroup;
  errors: { [key: string]: string } = {};
  isUpdatingPadlet = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pl: PadletStoreService,
    private router: Router) {
    this.padletForm = this.fb.group({});
  }

  ngOnInit() {
    //properties von padlet werden an formular-felder gebunden, Validierung
    this.padletForm = this.fb.group({
      id: this.padlet?.id,
      title: [this.padlet?.title, Validators.required],
    });

    //checkt ständig ob Fehler auftritt
    this.padletForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
    /* this.route.paramMap.subscribe((params: ParamMap) => {
       const id : number = Number(params.get('id'));

       if (id) {
         this.isUpdatingPadlet = true;
         this.pl.getOne(id).subscribe(
           padlet => {
             this.padlet = padlet;
             this.initPadlet();
           });
       }
     });*/
    //this.initPadlet();
  }

  submitForm() {
    console.log('submitted');
    //user id will manhaben > authetication stor Service > getCurrentUSerID
    //this.padletForm.value.title;
    //da dazu zusätzlihc zu title und is_public > user creator id mitschickn
    this.pl.create({title: this.padletForm.value.title}).subscribe(res => {
      console.log(res);
    });


  }

  updateErrorMessages() {
    console.log("Is form invalid? " + this.padletForm.invalid);
    this.errors = {};
    for (const message of BookFormErrorMessages) {
      const control = this.padletForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors
      ) {
        this.errors[message.forControl] = message.text;
      }
    }


  }
}
