import { Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import {Activity} from "../store/models/activity.model";
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ActivityDialogComponent} from "../activity-dialog/activity-dialog.component";

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {

  @Input()
  activities: Activity[];

  constructor(private dialog: MatDialog) {
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

  editActivity(activity:Activity) {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';

        dialogConfig.data = activity;

        const dialogRef = this.dialog.open(ActivityDialogComponent,
            dialogConfig);


    }

}
