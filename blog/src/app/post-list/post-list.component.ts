import { Component, OnInit } from '@angular/core';
import {ApiserviceService} from '../apiservice.service'

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {
  fetchBlogDatas = [];
  constructor(private apiservice:ApiserviceService) { 
    this.onGetData();
  }

  onGetData(){
    this.apiservice.getBlogData().subscribe(
      (blogData:any[]) => {this.fetchBlogDatas = blogData;},
      (error) => console.log(error)
    );
  }
  ngOnInit() {
  }

}
