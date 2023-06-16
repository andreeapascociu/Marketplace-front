import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

  constructor(private router: Router){

  }

  GoToDashboard() {
    this.router.navigate(['dashboard']);
  }

  toggleVisibilityOn() {
    const el = document.getElementById('password');
    const von = document.getElementById('visibility_on');
    const voff = document.getElementById('visibility_off');
    el?.setAttribute('type','text');
    von!.style.display = 'block';
    voff!.style.display = 'none';
  }

  toggleVisibilityOff() {
    const el = document.getElementById('password');
    const von = document.getElementById('visibility_on');
    const voff = document.getElementById('visibility_off');
    el?.setAttribute('type','password');
    von!.style.display = 'none';
    voff!.style.display = 'block';
  }

}
