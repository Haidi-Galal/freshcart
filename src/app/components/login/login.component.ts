import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _auth :AuthService,private _router :Router){

  }
  message!:string;
  loginForm:FormGroup =new FormGroup(
   {
     email:new FormControl('',[Validators.required,Validators.email]),
     password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)])
   }
  );

  handleLogin():void{
   if(this.loginForm.valid==true){
     this._auth.loginUser(this.loginForm.value).subscribe({
       next:(respone)=>{
       console.log(respone);
       console.log(respone.token);
       localStorage.setItem('etoken',respone.token);
       this._auth.saveUserData();
       this._router.navigate(['/home']);
   
       },
       error:(err:HttpErrorResponse)=>{
         console.log(err);
         console.log(this.loginForm.valid);
         this.message=err.error.message;
       }
      })
   }
   else{
    this.loginForm.markAllAsTouched();
   }

 //  console.log(this.loginForm);
 


  }
}
