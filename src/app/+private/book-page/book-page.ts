import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { Thing } from '../../+shared/+base/base-thing';
import { baseCudPage } from '../../+shared/+base/base-crud-page';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";
import { Field } from '@angular/forms/signals';

@Component({
  selector: 'app-book-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage extends baseCudPage<BookItem> implements OnInit {
  ngOnInit(): void {
    this.item={
    title:'',
    writer:'',
    publisher:'',
    }
    this.dataRefresh();
}
  override dataService = inject(BooksService);
  override addprepair(): void {
   this.item={
    title:'',
    writer:'',
    publisher:'',
   }
}
  booksColumns:column[]=[
    {field:'id',title:'شناسه'},
    {field:'title',title:'عنوان'},
    {field:'writer',title:'نویسنده'},
    {field:'publisher',title:'ناشر'},
    {field:'price',title:'قیمت'},

  ]
}

export interface BookItem extends Thing{
  title: string;
  writer: string;
  publisher: string;
  price?: number;
}
