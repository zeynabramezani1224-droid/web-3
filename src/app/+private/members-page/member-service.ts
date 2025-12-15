import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';

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
}
