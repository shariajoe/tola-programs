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

    constructor(
        private store: Store<State>,
        private activitiesService: ActivitiesService,
        private fb: FormBuilder,
        private dialogRef: MatDialogRef<ActivityDialogComponent>,
        @Inject(MAT_DIALOG_DATA) activity:Activity ) {

    	if(activity && activity != null && activity.hasOwnProperty('id')){

	        this.activityId = activity.id;

	        this.name = activity.name;

	        this.expected_start_date = activity.expected_start_date;

	        this.expected_end_date = activity.expected_end_date;

	        this.startDate = new Date(this.expected_start_date);

	        console.log(this.startDate);
            this.endDate = new Date(this.expected_end_date);

	        this.form = fb.group({
	            name: [activity.name, Validators.required],
	            expected_start_date: [activity.expected_start_date, Validators.required],
	            expected_end_date: [activity.expected_end_date,Validators.required]
	        });
	    }else{
	    	this.showAdd = true;
	    	this.form = fb.group({
	            name: ["", Validators.required],
	            expected_start_date: ["", Validators.required],
	            expected_end_date: ["",Validators.required]
	        });
	    }

    }

    ngOnInit() {

    }


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


    add() {
        const formValues = this.form.value;

        const url = window.location.href;

        const workflowlevel1 = url.split('/').pop();

        let changes = {...formValues};

        changes['expected_start_date'] = moment(formValues.expected_start_date).format();
        changes['expected_end_date'] = moment(formValues.expected_end_date).format();

        changes['workflowlevel1'] = `https://dev-api.toladata.io/api/workflowlevel1/${workflowlevel1}/`;

        this.activitiesService
            .addActivity(this.activityId, changes)
            .subscribe(
                (response) => {

                    let activity = <Activity>response;

                    this.store.dispatch(new AddActivity({activity}));

                    this.dialogRef.close();
                }
            );
    }

    close() {
        this.dialogRef.close();
    }

}

