import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userservice:UserService ,private router:Router) { }

  ngOnInit(): void {
  }

  // loginWithGoogle() {

  //   this.userservice.login().subscribe(res => {
  //     console.log(res);
  //   })
  // }

}
