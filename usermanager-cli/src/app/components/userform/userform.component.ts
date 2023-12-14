import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule, ValidatorFn, ValidationErrors } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CustomvalidationService } from '../../services/customvalidation.service';
import * as bcrypt from 'bcryptjs';

@Component({
  selector: 'app-userform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './userform.component.html',
  styleUrl: './userform.component.css'
})
export class UserformComponent {


  user: User = new User;
  form!: FormGroup;
  submitted: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private cValidator: CustomvalidationService,
    private userService: UserService) { }

  ngOnInit() {
    this.submitted = false;
    this.form = new FormGroup({
      name: new FormControl(this.user.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)
      ]),
      email: new FormControl(this.user.email, [
        Validators.required, 
        Validators.email
      ]),
      password: new FormControl(this.user.password, Validators.required),
      passwordConfirm: new FormControl(this.user.password, [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20)           
      ])
    },
    {
      validators: this.cValidator.MatchPassword('password', 'passwordConfirm')
    });
  }

  private prepareSave(): User {
    const userToSave = new User().deserialize(this.form.value);
    userToSave.password =  bcrypt.hashSync(userToSave.password);
    return userToSave;
  }

  onSubmit() {
    this.submitted = true;
    const user = this.prepareSave(); // `user` is now an instance of "User"
    this.userService.postUser(user).subscribe(user => console.log(user));
  }

}