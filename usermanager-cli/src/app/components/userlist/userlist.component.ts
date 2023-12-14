import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  users!: User[];

  constructor(private router: Router, private userService: UserService){
    
  }

  getUserForm() {
    this.router.navigate(['/user-form']);
  }

  ngOnInit() { 
    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) =>{
        console.log("CAPTURAR ESTE ERRO");
      });
  }
  
}
