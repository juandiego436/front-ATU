import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
    constructor(
      private _router: Router
    ) {}

    public sendEmail() {
      this._router.navigate(["/new-password"]);
    }
}
