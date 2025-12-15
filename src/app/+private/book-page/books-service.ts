import { Injectable } from '@angular/core';
import { BookItem } from './book-page';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
   private data:BookItem[]=[
    {id:1,title:'بادبادک باز',writer:'جوجو مویز',publisher:'جوجو مویز',price:80000},
    {id:2,title:'پایتون',writer:'حریریان',publisher:'نبوی',price:10000},
    {id:3,title:'c+',writer:'نبوی',publisher:'استاد عاشورلو',price:870000},
    {id:4,title:'c++',writer:'نبوی',publisher:'استاد عاشورلو',price:870000} 
  ];
  //تابع ایست که لیست کتاب هارا تحویل میدهد
  //فعلا با داده های ماک کار میند اما در آینده باید از بک اند استفاده کند
  list(){
    return[...this.data];
  }
  //این یک تابع است که کتابی را به عنوان پارامتردریافت و به لیست کتاب ها اضافه میکند
    //فعلا به داده ماک اضافه میکند  اما در آینده باید به بک اند اضافه کند
  add(item:BookItem){
    this.data.push(item);
  }
}
