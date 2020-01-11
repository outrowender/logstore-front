import { Component, OnInit } from "@angular/core";
import { AuthService } from "../auth.service";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { RxwebValidators } from "@rxweb/reactive-form-validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor(private _auth: AuthService) {}
  formRegister: FormGroup;

  ngOnInit() {
    this.formRegister = new FormGroup({
      name: new FormControl("", [
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(50)
      ]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [
        RxwebValidators.required(),
        RxwebValidators.password({
          validation: {
            minLength: 6,
            maxLength: 20,
            digit: true,
            alphabet: true
          }
        })
      ]),
      repassword: new FormControl("", [
        RxwebValidators.required(),
        RxwebValidators.compare({ fieldName: "password" })
      ])
    });
  }

  submit() {
    if (this.formRegister.valid) {
      this._auth.register(this.formRegister.value);
    } else {
      console.log("invalid");
    }
  }
}
