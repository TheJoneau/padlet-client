import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Padlet} from "../../types/Padlet";
import {PadletStoreService} from "../../shared/padlet-store.service";
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {BookFormErrorMessages, ErrorMessage} from "./padlet-form-error-messages";
import {AuthenticationStoreService} from "../../shared/authentication-store-service";
import {Role} from "../../types/Role";
import {User} from "../../types/User";
import {UserStoreService} from "../../shared/user-store-service";
import {RoleStoreService} from "../../shared/role-store-service";

@Component({
  selector : 'pl-create-padlet-view',
  templateUrl : './CreatePadletView.html',
  styles : []
})
export class CreatePadletView implements OnInit {
  padlet: Padlet | undefined;
  roles: Role[] | undefined;
  users: User[] | undefined;
  usersWithRoles: FormArray

  padletForm: FormGroup;
  errors: { [key: string]: string } = {};
  isUpdatingPadlet = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private pl: PadletStoreService,
    private authService: AuthenticationStoreService,
    private userService: UserStoreService,
    private roleService: RoleStoreService,
    private router: Router) {
    this.padletForm = this.fb.group({});
    this.usersWithRoles = this.fb.array([]);
  }

  ngOnInit() {
    this.getRoles();
    this.getUsers();

    //properties von padlet werden an formular-felder gebunden, Validierung
    this.padletForm = this.fb.group({
      title: [null, Validators.required],
      is_public: [false, Validators.required],
      creator_id: this.padlet?.creator_id,
      usersWithRoles: this.usersWithRoles
    });

    //checkt ständig ob Fehler auftritt
    this.padletForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }

  addUserWithRole() {
    this.usersWithRoles.push(this.fb.group({userId: null, roleId: null }))
  }

  getRoles() {
    this.roleService.getAll().subscribe(res => {
      this.roles = res;
    })
  }

  getUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res;
    })
  }

  submitForm() {
    console.log('submitted');

    const creator_id = this.authService.getCurrentUserId();

    this.pl.create({
      title: this.padletForm.value.title,
      is_public: this.padletForm.value.is_public,
      creator_id,
      users: this.padletForm.value.usersWithRoles.map((user: any) => ({
        id: user.userId,
        role: user.roleId
      }))
    }).subscribe(res => {
      console.log(res);
      this.router.navigate(['/padlets', res.id])
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
