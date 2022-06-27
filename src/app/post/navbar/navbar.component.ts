import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  form: FormGroup;

  constructor(private postService: PostService, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required],
    });
   }

  ngOnInit(): void {
  }

  addModalForm(){

  }

  get f(){
    return this.form.controls;
  }

  submit(){
    console.log(this.form);
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.postService.create(this.form.value).subscribe(() => {
        window.location.reload()
      });
    }
  }
}
