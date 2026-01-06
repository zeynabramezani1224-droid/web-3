import { Injectable } from '@angular/core';
import { BookItem } from './book-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class BooksService extends BaseService<BookItem> {
  override data: BookItem[] = [
    { id: 1, title: 'بادبادک باز', writer: 'جوجو مویز', publisher: 'جوجو مویز', price: 80000 },
    { id: 2, title: 'پایتون', writer: 'حریریان', publisher: 'نبوی', price: 10000 },
    { id: 3, title: 'c+', writer: 'نبوی', publisher: 'استاد عاشورلو', price: 870000 },
    { id: 4, title: 'c++', writer: 'نبوی', publisher: 'استاد عاشورلو', price: 870000 }
  ];
  override update(destination: BookItem, source: BookItem): void {

    destination.title = source.title;
    destination.writer = source.writer;
    destination.publisher = source.publisher;
    destination.price = source.price;
  }
}

