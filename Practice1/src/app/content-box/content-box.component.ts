import { Component, Input, OnInit } from '@angular/core';
import { box } from "../helper-files/content-interface";

@Component({
  selector: 'app-content-box',
  templateUrl: './content-box.component.html',
  styleUrls: ['./content-box.component.scss']
})
export class ContentBoxComponent implements OnInit {
  @Input() cloth?: box;

  constructor() {

  }


  ngOnInit(): void {
  }

  imageClicked(): void {
    console.log("ID: ", this.cloth?.id, ", Title: ", this.cloth?.title);
  }

}
