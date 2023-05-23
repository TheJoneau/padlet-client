import {Component, OnInit} from "@angular/core";
import {EntryStoreService} from "../../shared/entry-store-service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthenticationStoreService} from "../../shared/authentication-store-service";

@Component({
  selector : 'pl-create-entry-view',
  templateUrl : './CreateEntryView.html',
  styles : []
})

export class CreateEntryView implements OnInit {
  padletId: number | undefined;

  entryForm: FormGroup;
  errors: { [key: string]: string } = {};

  constructor (
    private fb: FormBuilder,
    private et:EntryStoreService,
    private route: ActivatedRoute,
    private authService: AuthenticationStoreService,
    private router: Router) {
    this.entryForm = this.fb.group({});
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.padletId = Number(params.get('id'));
    });

    this.entryForm = this.fb.group({
      title: [null, Validators.required],
      text: [null, Validators.required]
    });
  }

  submitForm () {
    const creator_id = this.authService.getCurrentUserId();

    this.et.create({
      padlet_id: this.padletId,
      creator_id,
      title: this.entryForm.value.title,
      text: this.entryForm.value.text
    }).subscribe(res => {
      this.router.navigate(['/padlets', this.padletId]);
    });
  }

}
