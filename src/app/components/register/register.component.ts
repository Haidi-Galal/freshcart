import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormControlOptions, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _auth:AuthService,private _router:Router){

  }
  message!:string;
  loading:boolean=false;

  registerForm:FormGroup =new  FormGroup({
    name: new FormControl('',[Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20)
    ]),
    email:new FormControl('',[Validators.email,
    Validators.required]),
    password:new FormControl('',
    [Validators.required,
      Validators.pattern(/^[A-Z][a-z0-9]{6,10}$/)
     

    ]
    ),
    rePassword:new FormControl(''
    
    ),
    phone:new FormControl('',[Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/)
    ]
    ),
  },{validators:[this.confirmPassword]}as FormControlOptions);

  register():void{
     console.log(this.registerForm);
    if(this.registerForm.valid==true){
      this.loading=true;
     
      console.log(this.registerForm.value);
      this._auth.registerUser(this.registerForm.value).subscribe({
        next:(reposne)=>{

          this.loading=false;
         console.log(reposne);
         console.log(this.loading);

         this._router.navigate(['/login']);
        }
        ,
        error:(err:HttpErrorResponse)=>{
          
          this.loading=false;
         console.log(err.error.message);
         console.log(this.loading);
         this.message=err.error.message;
        }
        }
        )
       }
      

    }

  confirmPassword(group :FormGroup):void{
    
   if (group.get('rePassword')?.value==''){
    group.get('rePassword')?.setErrors({
      required:true
    })
   }
   else if(group.get('password')?.value!=group.get('rePassword')?.value){
    group.get('rePassword')?.setErrors({
      mismatch:true
    })
   }
  }
}
