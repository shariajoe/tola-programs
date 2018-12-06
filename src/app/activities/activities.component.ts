import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Activity} from "../store/models/activity.model";
import {Observable} from "rxjs";
import {filter, map, tap, withLatestFrom} from "rxjs/operators";
import {State} from '../store/reducers/';
import {select, Store} from '@ngrx/store';
import { selectAllActivities, selectProgramActivities } from '../store/selectors/activity.selectors';
import {AllActivitiesRequested} from '../store/actions/activity.actions';
import {MatDialog, MatDialogConfig} from "@angular/material";
import {ActivityDialogComponent} from "../activity-dialog/activity-dialog.component";

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent  implements OnInit, OnDestroy {
  id: number;
  name: string;
  private sub: any;
  allActivities$: Observable<Activity[]>;

  programActivities$: Observable<Activity[]>;

  workflowlevel1$: number;

  constructor(private route: ActivatedRoute, private store: Store<State>, private dialog: MatDialog) { 

  }

  ngOnInit() {
  	this.sub = this.route.params.subscribe(params => {
       this.id = +params['id'];

       this.name = params['program'];

       this.store.dispatch(new AllActivitiesRequested());

       this.programActivities$ = this.store.pipe(select(selectProgramActivities(this.id)));
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

    addActivity() {

        const dialogConfig = new MatDialogConfig();

        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = '400px';

        const dialogRef = this.dialog.open(ActivityDialogComponent,
            dialogConfig);


    }

}
