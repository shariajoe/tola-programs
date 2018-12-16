import { Component, Input, OnInit } from '@angular/core';
import { Program } from "../../models/program.model";

@Component({
    selector: 'program-list-item',
    templateUrl: './program-list-item.component.html',
    styleUrls: ['./program-list-item.component.scss']
})
export class ProgramListItemComponent implements OnInit {

  @Input()
  programs: Program[] = [];

  constructor() {
  }

  ngOnInit() {

  }
  
  /**
  * Function to Strip html tags from content 
  */
  stripTags(content){
 	  if(content){
	   	let noTags = content.replace(/<[^>]*>/g, '');
	   	return noTags;
    }
    else{
      return "Sponsored Tola Program"
    }
  }

}










