import { Component, OnInit, OnDestroy  } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Activity} from "../store/models/activity.model";
import {Observable} from "rxjs";
import {filter, map, tap, withLatestFrom} from "rxjs/operators";
import {State} from '../store/reducers/';
import {select, Store} from '@ngrx/store';
import { selectAllActivities, selectProgramActivities } from '../store/selectors/activity.selectors';
import {AllActivitiesRequested} from '../store/actions/activity.actions';


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

  constructor(private route: ActivatedRoute, private store: Store<State>) { 

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

}
