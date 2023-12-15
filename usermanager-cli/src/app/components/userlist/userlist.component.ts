import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
  msg!: string | null;

  getCutId(id: string): string {
    return id.substring(0,5);
  }

  users!: User[];

  constructor(private router: Router, private route: ActivatedRoute, private userService: UserService){
    
  }

  getUserForm() {
    this.router.navigate(['/user-form']);
  }

  ngOnInit() { 
    
    this.msg = this.route.snapshot.paramMap.get('msg');

    this.userService.getUsers().subscribe(
      (users) => {
        this.users = users;
      },
      (error) =>{
        console.log("CAPTURAR ESTE ERRO");
      });
  }
  
}
