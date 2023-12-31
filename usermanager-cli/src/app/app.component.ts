import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private router: Router ) {

  }

  abaAtiva(route: string): string {
    if(this.router.url === route){
      return 'active';
    }else{
      return '';
    }
  }

  title = 'usermanager-cli';
  
}
