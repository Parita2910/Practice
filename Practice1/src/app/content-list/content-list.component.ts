import { Component, OnInit } from '@angular/core';
import { box } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  clothList: box[];
  constructor() {
    this.clothList = [{
      id: 0,
      title: "Tshirt",
      details: "Tshirt",
      Image: "https://m.media-amazon.com/images/I/611ixoDpRLL._AC_.jpg",
      Color: ["Blue", "Yellow","Green"],
      Size: ["M","S"]
    }, {
      id: 1,
      title: "Shirt",
      details: "Shirt",
      Image: "https://m.media-amazon.com/images/M/MV5BODJkZTZhMWItMDI3Yy00ZWZlLTk4NjQtOTI1ZjU5NjBjZTVjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
      Color: ["Blue", "Yellow"],
      Size: ["M","S"]
    }, {
      id: 2,
      title: "Pant",
      details: "Pant",
      Image: "https://upload.wikimedia.org/wikipedia/en/8/8a/The_Avengers_%282012_film%29_poster.jpg",
      Color: ["Blue", "Yellow"],
      Size: ["M","S"]
    }, {
      id: 3,
      title: "Jacket",
      details: "Jacket",
      Image: "",
      Color: ["Blue", "Yellow"],
      Size: ["M","S"]
    }, {
      id: 4,
      title: "Onepiece",
      details: "Onepiece",
      Image: "",
      Color: ["Blue", "Yellow"],
      Size: ["M","S"]
    }];
  }

  ngOnInit(): void {
  }

}
