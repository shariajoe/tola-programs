import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {Activity} from "../store/models/activity.model";
import {ActivitiesService} from "../store/services/activities.service";
import {State} from "../store/reducers";
import {Store} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {ActivitySaved} from '../store/actions/activity.actions';

@Component({
    selector: 'activity-dialog',
    templateUrl: './activity-dialog.component.html',
    styleUrls: ['./activity-dialog.component.scss']
})
export class ActivityDialogComponent implements OnInit {

    activityId:number;

    form: FormGroup;
    name: string;
    startDate: string;
    endDate: string;

    constructor(
        private store: Store<State>,
        private activitiesService: ActivitiesService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ActivityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) activity:Activity ) {

        this.activityId = activity.id;

        this.name = activity.name;

        this.startDate = activity.expected_start_date;

        this.endDate = activity.expected_end_date;


        this.form = fb.group({
            name: [activity.name, Validators.required],
            startDate: [activity.expected_start_date, Validators.required],
            endDate: [activity.expected_end_date,Validators.required]
        });

    }

    ngOnInit() {

    }


    save() {
        const changes = this.form.value;

        changes['id'] = this.activityId;

        changes['workflowlevel1'] = "https://dev-api.toladata.io/api/workflowlevel1/551/";

        this.activitiesService
            .saveActivity(this.activityId, changes)
            .subscribe(
                () => {

                    const activity: Update<Activity> = {
                      id: this.activityId,
                      changes
                    };

                    this.store.dispatch(new ActivitySaved({activity}));

                    this.dialogRef.close();
                }
            );
    }

    close() {
        this.dialogRef.close();
    }

}

