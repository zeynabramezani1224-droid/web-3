import { Routes } from '@angular/router';
import { LoginPage } from './+public/+pages/login-page/login-page';
import { PrivateTemplate } from './+private/private-template/private-template';
import { BookPage } from './+private/book-page/book-page';
import { MembersPage } from './+private/members-page/members-page';
import { BorrowsPage } from './+private/borrows-page/borrows-page';
import { ReportsPage } from './+private/reports-page/reports-page';
import { DashboardPage } from './+private/dashboard-page/dashboard-page';

export const routes: Routes = [
    { path: 'login', component: LoginPage },
    {
        path: 'private', component: PrivateTemplate, children: [
            { path:'books',component:BookPage},
            { path:'members',component:MembersPage},
            { path:'borrows',component:BorrowsPage},
            { path:'report',component:ReportsPage},
            { path:'dashboard',component:DashboardPage},
            { path:'',redirectTo:'dashboard',pathMatch:'prefix'},
            {path: '**', redirectTo:'dashboard'}

        ]
    },
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: '**', redirectTo: 'login' }
];
