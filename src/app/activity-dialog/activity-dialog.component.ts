import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import {Activity} from "../store/models/activity.model";
import {ActivitiesService} from "../store/services/activities.service";
import {State} from "../store/reducers";
import {Store} from "@ngrx/store";
import {Update} from "@ngrx/entity";
import {UpdateActivity} from '../store/actions/activity.actions';
import {AddActivity} from '../store/actions/activity.actions';

@Component({
    selector: 'activity-dialog',
    templateUrl: './activity-dialog.component.html',
    styleUrls: ['./activity-dialog.component.scss']
})
export class ActivityDialogComponent implements OnInit {

    activityId:number;

    form: FormGroup;
    name: string;
    expected_start_date: string;
    expected_end_date: string;
    showAdd: boolean = false;
    startDate = new Date();
    endDate = new Date();
    currentActivity: any;

    constructor(
        private store: Store<State>,
        private activitiesService: ActivitiesService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ActivityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) activity:Activity ) {

        this.currentActivity = activity;	

    }

    ngOnInit() {
       if(this.currentActivity && this.currentActivity.hasOwnProperty('id')){

            this.activityId = this.currentActivity.id;

            this.name = this.currentActivity.name;

            this.expected_start_date = this.currentActivity.expected_start_date;

            this.expected_end_date = this.currentActivity.expected_end_date;

            this.startDate = new Date(this.expected_start_date);

            this.endDate = new Date(this.expected_end_date);

            this.form = this.fb.group({
                name: [this.currentActivity.name, Validators.required],
                expected_start_date: [this.currentActivity.expected_start_date],
                expected_end_date: [this.currentActivity.expected_end_date]
            });
        }else{
            this.showAdd = true;
            this.form = this.fb.group({
                name: ["", Validators.required],
                expected_start_date: [""],
                expected_end_date: [""]
            });
        }
    }

    /**
    *   Function to save edit and update store
    */
    save() {
        const formValues = this.form.value;

        const url = window.location.href;

        const workflowlevel1 = url.split('/').pop();

        let changes = {...formValues};

        changes['expected_start_date'] = moment(formValues.expected_start_date).format();
        changes['expected_end_date'] = moment(formValues.expected_end_date).format();

        changes['workflowlevel1'] = `https://dev-api.toladata.io/api/workflowlevel1/${workflowlevel1}/`;

        this.activitiesService
            .saveActivity(this.activityId, changes)
            .subscribe(
                () => {

                    const activity: Update<Activity> = {
                      id: this.activityId,
                      changes
                    };

                    this.store.dispatch(new UpdateActivity({activity}));

                    this.dialogRef.close();
                }
            );
    }

    /**
    *   Function to create activity and update store
    */
    add() {
        const formValues = this.form.value;

        const url = window.location.href;

        const workflowlevel1 = url.split('/').pop();

        let changes = {...formValues};

        changes['expected_start_date'] = moment(formValues.expected_start_date).format();
        changes['expected_end_date'] = moment(formValues.expected_end_date).format();

        changes['workflowlevel1'] = `https://dev-api.toladata.io/api/workflowlevel1/${workflowlevel1}/`;

        this.store.dispatch(new AddActivity(changes));
        this.dialogRef.close();
    }


    /**
    *   Function to close dialog
    */
    close() {
        this.dialogRef.close();
    }

}

