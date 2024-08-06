import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../../interfaces/ListaPosts';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css']
})
export class ListaPostsComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.posts = this.postService.getAll();
  }

  filterByCategoria(cat: string): void {
    this.posts = this.postService.getByCategoria(cat);
  }


  navigateToNewPost(): void {
    this.router.navigate(['/new']);
  }
}