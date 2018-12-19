import { Component, OnInit } from '@angular/core';
import { Program } from '../../entities/program/models/program.model';
import { Observable } from 'rxjs';
import { State } from '../../reducers/';
import { select, Store } from '@ngrx/store';
import { selectAllPrograms } from '../../entities/program/selectors/program.selectors';
import { AllProgramsRequested } from '../../entities/program/actions/program.actions';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allPrograms$: Observable<Program[]>;

  constructor(private store: Store<State>) {}

  ngOnInit() {
    // Get all programs from store
    this.store.dispatch(new AllProgramsRequested());
    
    this.allPrograms$ = this.store.pipe(select(selectAllPrograms));
  }
}
