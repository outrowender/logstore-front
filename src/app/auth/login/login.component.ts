import {Component, OnInit} from '@angular/core'
import {AuthService} from '../auth.service'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {RxwebValidators} from '@rxweb/reactive-form-validators'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _auth: AuthService) {}
  formLogin: FormGroup

  ngOnInit() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [RxwebValidators.required()])
    })
  }

  submit() {
    if (this.formLogin.valid) {
      this._auth.login(this.formLogin.value)
    } else {
      Object.keys(this.formLogin.controls).forEach(key => {
        this.formLogin.get(key).markAsDirty()
      })
    }
  }

  isControlHasError(name: string, validationType: string): boolean {
    const ctr = this.formLogin.controls[name]
    return ctr && ctr.hasError(validationType) && (ctr.dirty || ctr.touched)
  }
}
