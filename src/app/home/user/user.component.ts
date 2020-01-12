import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/auth/auth.service";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  constructor(private _auth: AuthService) {}
  user: any;

  ngOnInit() {
    this._auth.user().then(data => (this.user = data));
  }

  logout() {
    this._auth.logout();
  }
}
