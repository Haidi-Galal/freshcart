import { Categories } from './../../shared/interfaces/categories';
import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/shared/categories.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  constructor(private catService:CategoriesService){

  }
  categories!:Categories[];
  ngOnInit(): void {
    this.catService.getCategories().subscribe({
      next:(response)=>{
        this.categories=response.data;
        // console.log(response.data);
      }

    })
  }

}
