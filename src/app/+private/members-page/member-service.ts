import { Injectable } from '@angular/core';
import { MemberItem } from './members-page';
import { BookItem } from '../book-page/book-page';
import { BaseService } from '../../+shared/+base/base-service';

@Injectable({
  providedIn: 'root',
})
export class MemberService extends BaseService<MemberItem> {
  override data: MemberItem[] = [
    { id: 1000, name: 'maryam', lastName: 'ahmadi', CodeMeli:'369855', phoneNumber:'03030252'},
    { id: 1001, name: 'zahra', lastName: 'ramezani', CodeMeli: '3855964', phoneNumber: '989658' },
    { id: 1002, name: 'leila', lastName: 'zamani', CodeMeli: '38598464', phoneNumber: '989658' },
  ];
  override update(destination: MemberItem, source: MemberItem): void {
    destination.name = source.name;
    destination.lastName =source.lastName;
  }
}


