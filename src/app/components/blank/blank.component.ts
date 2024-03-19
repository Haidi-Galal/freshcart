import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/auth.service';

@Component({
  selector: 'app-blank',
  templateUrl: './blank.component.html',
  styleUrls: ['./blank.component.css']
})
export class BlankComponent {
  constructor(private _auth:AuthService){}
  logOut (){
    this._auth.logOutUser();
  }
}
