import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  users:any;
  inValid:any =false;
  loggedInuser:any;

  constructor(private formBuilder: FormBuilder,private appService:AppService, private router: Router) { }
  ngOnInit() {
    this.loggedInuser = localStorage.getItem('loggedInUser');
    this.appService.getProducts().subscribe(user=>{
      if(user){
        this.users = user.users;
      }
    });
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
  });
  }

  onSubmit(){
    this.submitted = true;
    let form:any = this.loginForm.value;
    let loggedUser:any;
    let lastPath:any = localStorage.getItem('loggedInPage');
    if (this.loggedInuser) {
      if (lastPath === '/cart') {
        this.router.navigateByUrl('/success');
      } else{
        this.router.navigateByUrl(lastPath);
      }
    } else {
      if (this.loginForm.valid) {
        loggedUser = this.users.filter(x => { return (x.Username === form.username && x.Password === parseInt(form.password)) });
        if (loggedUser.length) {
          this.appService.getLoggedinUser(loggedUser);
          localStorage.setItem('loggedInUser', JSON.stringify(loggedUser));
          if (lastPath === '/cart') {
            this.router.navigateByUrl('/success');
          } else {
            this.router.navigateByUrl(lastPath);
          }
        }
        else {
          this.inValid = true;
        }
      } else {
        this.inValid = true;
      }
    }
  }

}
