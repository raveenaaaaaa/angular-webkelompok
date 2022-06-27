import { Component, Input, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
@Input() set post(post: Post){
  if(post){
    this.form.patchValue(post);
  }
}  


form!: FormGroup;
_id!:string;



 /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder,
    public modal: NgbActiveModal
  ) { 
    this.form = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      phone: ['', Validators.required]
    }
    );
  }
  
  

  
  ngOnInit() : void { 
    
}
    

  get f(){
    return this.form.controls;
  }
    
  submit(){
    
    this.form.markAllAsTouched();
    if(this.form.valid){
      this.modal.close(this.form.value)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Employee was updated successfully',
        showConfirmButton: false,
        timer: 1800
      })
    }
  }

  
}