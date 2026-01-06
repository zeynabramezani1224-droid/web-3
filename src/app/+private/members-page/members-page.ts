import { Component, inject, Injectable, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MemberService } from './member-service';
import { BookItem } from '../book-page/book-page';
import { Thing } from '../../+shared/+base/base-thing';
import { baseCudPage } from '../../+shared/+base/base-crud-page';
import { BaseService } from '../../+shared/+base/base-service';
import { BaseCrudComponent, column } from "../../+shared/+base/base-crud-component/base-crud-component";

@Component({
  selector: 'app-members-page',
  imports: [FormsModule, BaseCrudComponent],
  templateUrl: './members-page.html',
  styleUrl: './members-page.scss',
})

export class MembersPage extends baseCudPage<MemberItem> implements OnInit{
  ngOnInit(): void {
      this.item={
      name:'',
      lastName:'',
       CodeMeli:'',
    phoneNumber:''
    };
    this.dataRefresh();
  }
  override dataService =inject(MemberService);
  override addprepair(): void {
    this.item={
      name:'',
      lastName:'',
    CodeMeli:'',
    phoneNumber:''
    }
  }
  memberColumns:column[]=[
    {field:'id',title:'کد عضویت'},
    {field:'name',title:'نام'},
    {field:'lastname',title:'نام خانوادگی'},
    {field:'Codemeli',title:'کد ملی'},
    {field:'phonenumber',title:'شماره تماس'}
  ]
}

export interface MemberItem extends Thing {
  name: string;
  lastName: string;
  CodeMeli: string;
  phoneNumber: string;
}