import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Activity} from "../store/models/activity.model";

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input()
  activities: Activity[];

  constructor() {
  }

  ngOnInit() {

  }


	getFormattedDateForUrl(date_created) {
	  let date = new Date(date_created);
	  let year = date.getFullYear();
	  let month = (1 + date.getMonth()).toString();
	  month = month.length > 1 ? month : '0' + month;
	  let day = date.getDate().toString();
	  day = day.length > 1 ? day : '0' + day;
	  return day +'-'+ month +'-'+year;
	}

}
