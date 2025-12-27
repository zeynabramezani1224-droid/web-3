import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BookItem } from '../book-page/book-page';

@Injectable({
  providedIn: 'root',
})
export class MemberService {
  private data: MemberItem[] = [
    {
      id: 1,
      name: 'zeynab',
      lastName: 'ramezani',
      codeMeli: 935845112,
      phoneNumber: 9054032565
    },

    {
      id: 2,
      name: 'zeynab',
      lastName: 'ramezani',
      codeMeli: 935845112,
      phoneNumber: 904858658
    },

    {
      id: 3,
      name: 'zeynab',
      lastName: 'ramezani',
      codeMeli: 935845112,
      phoneNumber: 904858658
    },
  ];

  list() {
    return [...this.data];
  }

  add(item: MemberItem) {
    this.data.push(item);
  }
  edit(item: MemberItem) {
    const index = this.data.findIndex(b => b.id != item.id);
    if (index != -1) {
      this.data[index].name = item.name;
      this.data[index].lastName = item.lastName;
      this.data[index].codeMeli = item.codeMeli;
      this.data[index].phoneNumber = item.phoneNumber;
    }
  }
remove(item: MemberItem){
this.data=this.data.filter(b=>b.id!=item.id);
}
}
