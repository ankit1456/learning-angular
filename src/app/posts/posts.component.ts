import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found.error';
import { AppError } from './../common/app.error';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../common/service/post.service';

@Component({
  selector: 'posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent implements OnInit {
  posts: any[];

  constructor(private service: PostService) {}

  ngOnInit(): void {
    this.service.getALl().subscribe({
      next: (posts: any) => (this.posts = posts),
    });
  }

  addPost(post: HTMLInputElement) {
    this.service.create(post).subscribe({
      next: (response) => {
        this.posts.splice(0, 0, response);
        post.value = '';
      },
      error: (error: AppError) => {
        if (error instanceof BadInput) {
          // this.form.setErrors(error.originalError)
          alert('Bad input');}
        else throw error;
      },
    });
  }

  updatePost(post: any) {
    this.service.update(post).subscribe({
      next: (response) => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1, response);
      },
    });
  }

  deletePost(post: any) {
    this.service.delete(post.id).subscribe({
      next: () => {
        const index = this.posts.indexOf(post);
        this.posts.splice(index, 1);
      },
      error: (error: AppError) => {
        if (error instanceof NotFoundError) alert('Post not found');
        else throw error;
      },
    });
  }
}
