import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';
import { Categories } from 'src/app/shared/interfaces/categories';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {
constructor(private catService:CategoriesService){

}
brands!:Categories[];
  ngOnInit(): void {
    this.catService.getBrands().subscribe({
      next:(response)=>{
      this.brands=  response.data;
        console.log(response);
      }
    })
  }
}
