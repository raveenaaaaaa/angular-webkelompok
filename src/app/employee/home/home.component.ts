import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { Post } from 'src/app/post';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddComponent } from 'src/app/post/add/add.component';
import { UpdateComponent } from 'src/app/post/update/update.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
      
  posts: Post[] = [];
  id!: string;
 
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private postService: PostService,
    private modalService: NgbModal,
    
    ) 
    { }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.postService.getAll().subscribe((posts: Post[])=>{
      this.posts = posts;
    })  
  }
    
  /**
   * Write code on Method
   *
   * @return response()
   */
  hapus(id:string){
    Swal.fire({
      title: 'Delete Confirmation',
      text: "Are you sure?",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor:'#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result)=>{
      if(result.isConfirmed){
        this.postService.delete(id).subscribe(()=>{
          Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Employee was deleted successfully',
        showConfirmButton: false,
        timer: 1800
          });
          const idx = this.posts.findIndex(q => q._id===id);
          this.posts.splice(idx,1);
        });
      }
    })
  }

  editModal(post: Post, id:string){
    const modal = this.modalService.open(UpdateComponent, {centered: true, ariaLabelledBy: 'modal-basic-title'});
    modal.componentInstance.post = post;
    modal.result.then(post => {
      this.postService.update(id, post)
      .subscribe(post => {
        const idx = this.posts.findIndex(q => q._id === id);
        this.posts[idx] = {...this.posts[idx], ...post};
      });
    }).catch(e => console.log(e));
  }

  addModal(){
    const modal = this.modalService.open(AddComponent, {centered:true});
    modal.result.then(post=>{
      this.postService.create(post).subscribe(post=> this.posts.push(post));
    }).catch (e=> console.log(e))
  }
    
}