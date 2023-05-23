import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookFormErrorMessages, ErrorMessage} from "./padlet-form-error-messages";
import {AuthenticationStoreService} from "../../shared/authentication-store-service";

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
    private authService: AuthenticationStoreService,
    private router: Router) {
    this.padletForm = this.fb.group({});
  }

  ngOnInit() {
    //properties von padlet werden an formular-felder gebunden, Validierung
    this.padletForm = this.fb.group({
      id: this.padlet?.id,
      title: [this.padlet?.title, Validators.required],
      is_public: ['', Validators.required],
      creator_id: this.padlet?.creator_id,
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

    const creator_id = this.authService.getCurrentUserId();

    console.log(creator_id);

    console.log(this.padletForm.value.title);
    console.log(this.padletForm.value.is_public);

    this.pl.create({
      title: this.padletForm.value.title,
      is_public: this.padletForm.value.is_public,
      creator_id: creator_id}).subscribe(res => {
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
