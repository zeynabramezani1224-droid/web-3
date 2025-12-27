import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from './member-service';
import { BookItem } from '../book-page/book-page';

@Component({
  selector: 'app-members-page',
  imports: [FormsModule],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})
export class MembersPage implements OnInit {
  save() {
    if (this.state == 'add') {
      this.memberService.add(this.item);
    }
    else if (this.state == 'edit') {
      this.memberService.edit(this.item)
    }
     else if (this.state == 'remove') {
      this.memberService.remove(this.item)
    }
    this.dataRefresh();
    this.state = 'list';
  }
  ngOnInit(): void {
    this.dataRefresh();
  }
  data: MemberItem[] = [];
  item: MemberItem = {
    id: 0,
    name: '',
    lastName: '',
    codeMeli: 0,
    phoneNumber: 0
  }
  memberService = inject(MemberService);
  state: string = 'list';
  dataRefresh() {
    this.data = this.memberService.list();
  }
  add() {
    this.state = 'add';
    this.item = {
      name: '',
      lastName: '',
      codeMeli: 0,
    }
  }
  edit(member: MemberItem) {
    this.item = {...member};
    this.state = 'edit';
  }
  remove(member: MemberItem) {
    this.item = {...member};
    this.state = 'remove';
  }
  cancel() {
    this.state = 'list';
  }
}


export interface MemberItem {
  id?: number;
  name: string;
  lastName: string;
  codeMeli: number;
  phoneNumber?: number;

}