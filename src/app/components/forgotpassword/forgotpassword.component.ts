import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private _authService:AuthService,private router:Router){

  }
  step1:boolean=true;
  step2:boolean=false;
  step3:boolean=false;
  email:any=''
  forgotPasword:FormGroup=new FormGroup({
    email:new FormControl('')
  });

  resetCode:FormGroup=new FormGroup({
    resetCode:new FormControl('')
  });
  resetPassword:FormGroup=new FormGroup({
    email:this.email,
    newPassword:new FormControl('')
  });
  message:string =''
  gotForgotPassword(){
     this._authService.forgotPassword(this.forgotPasword.get('email')?.value).subscribe({
      next:(response)=>{
       console.log(response);
      this.message= response.message;
      this.step1=false;
      this.step2=true;
     this.email= this.forgotPasword.get('email')?.value;
      },
      error:(err)=>{
        this.message= err.error.message;

        console.log(err);
      }
     });
  }
  verifyResetCode(){

    this._authService.resetcode(this.resetCode.get('resetCode')?.value).subscribe({
      next:(response)=>{
        console.log(this.resetCode.get('resetCode')?.value);
        console.log(response);
        this.message= response.message;
       
        this.step2=false;
        this.step3=true;
      },
      error:(err)=>{
        console.log(this.resetCode.get('resetCode')?.value);

        this.message= err.error.message;

        console.log(err);
      }
    })
  }
  resetNewPassword(){
    this._authService.resetPasswordCode(this.resetPassword.get('newPassword')?.value,this.email)
    .subscribe({
      next:(response)=>{
        console.log(response);
        this.message= response.status;
        console.log(this.resetPassword.get('newPassword')?.value);
        console.log(this.email);
        localStorage.setItem('etoken',response.token);
         this.router.navigate(['/home']);
      },
      error:(err)=>{
      console.log(this.resetPassword.get('newPassword')?.value);
      console.log(this.email);
        this.message= err.error.message;

        console.log(err);
      }
    })
  }

}
