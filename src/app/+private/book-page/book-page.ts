import { Component, inject, OnInit } from '@angular/core';
import { BooksService } from './books-service';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-book-page',
  imports: [FormsModule],
  templateUrl: './book-page.html',
  styleUrl: './book-page.scss',
})
export class BookPage implements OnInit {
  save() {

    this.booksService.add(this.item);
    this.dataRefresh();
    this.state = 'list';
  }

  ngOnInit(): void {
    this.dataRefresh();
  }



  data: BookItem[] = [];
  item: BookItem = {
    id: 0,
    title: '',
    writer: '',
    price: 0,
    publisher: ''
  }
  booksService = inject(BooksService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.booksService.list();

  }
  add() {
    this.state = 'add';
    this.item= {
      id: 0,
      title: '',
      writer: '',
      price: 0,
      publisher: ''
    }
  }

  cancel() {
    this.state = 'list';
  }
}

export interface BookItem {
  id: number;
  title: string;
  writer: string;
  publisher: string;
  price: number;
}
