import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from "../../../../node_modules/@angular/router";

@Component({
  selector: 'app-private-template',
  imports: [RouterOutlet],
  templateUrl: './private-template.html',
  styleUrl: './private-template.scss',
})
export class PrivateTemplate {
  router=inject(Router)
  logoff() {
    sessionStorage.clear();
    localStorage.removeItem('auth-token');
    this.router.navigateByUrl('/login');
  }

}
