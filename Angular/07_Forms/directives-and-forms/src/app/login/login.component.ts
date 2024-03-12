import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  @ViewChild('loginForm') form: NgForm | undefined;

  // Renders static content
  // ngOnInit():void {}

  // Renders the final content + dynamic content
  // ngAfterViewInti(): void {}

  formSubmitHandler() {
    if (!this.form) {
      return;
    }

    const form = this.form;

    if (form.invalid) {
      console.log('Form is Invalid!');
      return;
    }

    console.log('invalid', form.invalid);
    console.log(form.value);

    // form.value => ngModel on input
    const { email, password } = form.value;

    // 2 ways of reseting the data
    // form.reset();
    form.setValue({ email: '', password: '' });
  }
}
