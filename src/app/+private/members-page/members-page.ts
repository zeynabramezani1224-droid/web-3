import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-members-page',
  imports: [],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage {
  data: MemberItem[] = [
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
  add() {
    this.data.push({id:6,name:'zse', lastName:'sdf',codeMeli:25896325,phoneNumber:3054025856});
  }
}


export interface MemberItem {
  id: number;
  name: string;
  lastName: string;
  codeMeli: number;
  phoneNumber?: number;

}