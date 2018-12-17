import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Activity } from '../models/activity.model';
import { map } from 'rxjs/operators';
import AppConfig from '../config';

@Injectable()
export class ActivitiesService {
  headers = new HttpHeaders({
    Authorization: `${AppConfig.token}`
  });

  constructor(private http: HttpClient) {}

  /**
   * Function to Get all activities from server
   */
  findAllActivities(): Observable<Activity[]> {
    return this.http
      .get<Activity[]>(`${AppConfig.baseUrl}/workflowlevel2/`, {
        headers: this.headers
      })
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  /**
   * Function to Add activity to server
   */
  addActivity(changes: Partial<Activity>) {
    return this.http.post(`${AppConfig.baseUrl}/workflowlevel2/`, changes, {
      headers: this.headers
    });
  }

  /**
   * Function to Update activity on server
   */
  saveActivity(activityId: number, changes: Partial<Activity>) {
    return this.http.put(
      `${AppConfig.baseUrl}/workflowlevel2/${activityId}/`,
      changes,
      { headers: this.headers }
    );
  }

  /**
   * Function to delete from server
   */
  deleteActivity(activityId: number) {
    return this.http.delete(
      `${AppConfig.baseUrl}/workflowlevel2/${activityId}/`,
      { headers: this.headers }
    );
  }
}
