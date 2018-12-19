import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { Activity } from '../../entities/activity/models/activity.model';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivityDialogComponent } from '../activity-dialog/activity-dialog.component';
import { State } from '../../reducers';
import { Store } from '@ngrx/store';
import { DeleteActivity } from '../../entities/activity/actions/activity.actions';

@Component({
  selector: 'activity-list-item',
  templateUrl: './activity-list-item.component.html',
  styleUrls: ['./activity-list-item.component.scss']
})
export class ActivityListItemComponent implements OnInit {
  @Input()
  activities: Activity[] = [];

  constructor(private dialog: MatDialog, private store: Store<State>) {}

  ngOnInit() {}

  /**
   *   Function to format date
   */
  getFormattedDateForUrl(date_created) {
    const date = new Date(date_created);
    const year = date.getFullYear();
    let month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;
    let day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;
    return day + '-' + month + '-' + year;
  }

  /**
   *   Function to open edit activity dialog
   */
  editActivity(activity: Activity) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    dialogConfig.data = activity;

    const dialogRef = this.dialog.open(ActivityDialogComponent, dialogConfig);
  }

  /**
   *   Function to delete activity
   */
  deleteActivity(activity: Activity) {
    const activityId = '' + activity.id;
    this.store.dispatch(new DeleteActivity({ id: activityId }));
  }
}
