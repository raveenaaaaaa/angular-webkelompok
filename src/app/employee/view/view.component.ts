import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/service/post.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/post';
    
@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  post!: Post;
    
  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
    private router: Router,
    
   ) { }
    
  ngOnInit(): void {
    //First get the id from the current route
    const id = this.route.snapshot.paramMap.get('id') as string;
    this.postService.find(id).subscribe((post: Post)=>{
      this.post = post;
    }, (error) =>{
      console.log(error);
    });
  }
    

  
}