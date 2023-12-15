import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, ReactiveFormsModule, ValidatorFn, ValidationErrors } from '@angular/forms';
import { User } from '../../models/user.model';
import { UserService } from '../../services/user.service';
import { CustomvalidationService } from '../../services/customvalidation.service';
import * as bcrypt from 'bcryptjs';
import { Router } from '@angular/router';

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
    private router: Router,
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
      password: new FormControl(this.user.password, [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ]),
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
    userToSave.password = bcrypt.hashSync(userToSave.password);
    return userToSave;
  }

  validateField(field: string): any {
    let formfield = this.form.get(field);
    let touched = formfield?.touched;
    let hasRequiredErr = formfield?.hasError('required');
    let hasMinLenghtErr = formfield?.hasError('minlength');
    let hasMaxLenghtErr = formfield?.hasError('maxlength');

    return (touched || this.submitted) && (hasRequiredErr || hasMinLenghtErr || hasMaxLenghtErr);
  }

  getmsgErro(field: string) {
    let formfield = this.form.get(field);
    let hasRequiredErr = formfield?.hasError('required');
    let hasMinLenghtErr = formfield?.hasError('minlength');
    let hasMaxLenghtErr = formfield?.hasError('maxlength');

    if(hasRequiredErr){
      return `O ${field} é obrigatório!`;
    }else if(hasMinLenghtErr){   
      var min = 3;
      const minValidator = Validators.min(6);      

      if(formfield?.hasValidator(minValidator)){
        min = 6;
      }
      return `O tamanho mínimo permitido é de ${min} caracteres.`
    }else if(hasMaxLenghtErr){
      var  max = 20;
      const maxValidator = Validators.max(50);

      if(formfield?.hasValidator(maxValidator)){
        max = 50;
      }
      return `O tamanho máximo permitido é de ${max} caracteres.`
    }

    return '';

  }

  onSubmit() {
    this.submitted = true;
    const user = this.prepareSave(); // `user` is now an instance of "User"
    this.userService.postUser(user).subscribe(user => console.log(user));
    this.router.navigate(['/user-list', 'successMsg'])
  }

}