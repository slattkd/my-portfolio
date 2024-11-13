import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm= this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    })
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm);
      const form = document.getElementById('my-contact-form') as HTMLFormElement;
      if (form) {
        form.submit();
      }
    }
  }

}
