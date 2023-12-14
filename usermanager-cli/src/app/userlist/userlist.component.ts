import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.css'
})
export class UserlistComponent {

  constructor(private router: Router){ }

  getUserForm() {
    this.router.navigate(['/user-form']);
  }

  users = [
    { id: 1, name: 'Carla', email: 'teste@email.com' },
    { id: 2, name: 'Fernando', email: 'teste@email.com' },
    { id: 3, name: 'Ana', email: 'teste@email.com' },
    { id: 4, name: 'Denis', email: 'teste@email.com' },
    { id: 5, name: 'Alice', email: 'teste@email.com' },
    { id: 6, name: 'Antonio', email: 'teste@email.com' }
  ]

}
