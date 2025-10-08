import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-profile',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './profile.html',
  styleUrl: './profile.css'
})
export class Profile {
  username : string | null = localStorage.getItem('username');
  password : string | null = localStorage.getItem('password');
}
