import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
    
  form: FormGroup;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public postService: PostService,
    private router: Router,
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) { this.form = this.fb.group({
    firstname: ['', Validators.required],
    lastname: ['', Validators.required],
    email: ['', Validators.required],
    address: ['', Validators.required],
    phone: ['', Validators.required],
  });
}
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.modal.close(this.form.value)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Employee was added successfully',
        showConfirmButton: false,
        timer: 1800
      })
    }
  }
  
}
