import { Component, OnInit, OnDestroy } from '@angular/core';
import { Activity } from '../../entities/activity/models/activity.model';
import { Observable } from 'rxjs';
import { filter, map, tap, withLatestFrom } from 'rxjs/operators';
import { State } from '../../reducers/';
import { select, Store } from '@ngrx/store';
import {
  selectAllActivities,
  selectProgramActivities
} from '../../entities/activity/selectors/activity.selectors';
import { AllActivitiesRequested } from '../../entities/activity/actions/activity.actions';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { ActivityDialogComponent } from '../../components/activity-dialog/activity-dialog.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit, OnDestroy {
  id: number;
  name: string;
  private sub: any;
  programActivities$: Observable<Activity[]>;
  workflowlevel1$: number;

  constructor(
    private route: ActivatedRoute,
    private store: Store<State>,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    /**
     *   Fetch program id and name from route params
     */
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id'];
      this.name = params['program'];

      // Get all activities from store
      this.store.dispatch(new AllActivitiesRequested());
      
      this.programActivities$ = this.store.pipe(
        select(selectProgramActivities(this.id))
      );
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /**
   *   Function to open Add activity dialog
   */
  addActivity() {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '400px';

    const dialogRef = this.dialog.open(ActivityDialogComponent, dialogConfig);
  }
}
