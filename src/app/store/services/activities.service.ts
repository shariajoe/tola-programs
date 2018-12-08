import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Activity} from "../models/activity.model";
import {map} from "rxjs/operators";
import AppConfig from "./config"

@Injectable()
export class ActivitiesService {
    headers = new  HttpHeaders({
        //'token_type': 'JWT',
        'Authorization': `${AppConfig.token}`,
        //'access_token_jwt': 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJvcmdhbml6YXRpb25fdXVpZCI6ImI4NDdlNjFmLWRkMWYtNDM4YS05ZmQ3LTM5YzcwMmY4YTNkNiIsInVzZXJuYW1lIjoidG9sYSIsInJvbGUiOiJTdXBlclVzZXIiLCJleHAiOjE1NDM4Njg5MjQsImlzcyI6ImFjdGl2aXR5YXBpIiwiaWF0IjoxNTQzODMyOTI0LCJ1c2VyX3V1aWQiOiI3YTI3NmI2MS02MmQ3LTRjMDQtYmMyZi0yZGQzMmZjMGIxNmMifQ.a5K6r5L1jYTuVaYnddyoiZrQ_YO6BiNtU_b1xRQPCb7BjEKAGKuYxJgewWh41wqyeNC52zNoAKf99N6IizwtMduAVb4oai6LnrLZHeLAYgecd-GVkAETG7l9cuBuqdh9IUSku0whS2aSJvpVEZyocZ5FbPu9l-ewvlMMEf8RTBkGEwaxjxJspGhJJWAmM4GjrqdSI0pzp013XOrc8_lBLFnSBsptEMOK4Yzq8V8SXXn1bKv0Bc1WpvvU3PxOeVrtYga4ejoNwhfG75KM6odo0bjP29RjlfFi1C26AC5O45WgdcGqKPp9rTG_tbRq5sJZvXou2L10yE6jUKi-KtusiQ',

    });
    
    constructor(private http:HttpClient) {
        
    }

    findAllActivities(): Observable<Activity[]>  {
        
        return this.http.get(`${AppConfig.baseUrl}/workflowlevel2/`, { headers : this.headers}).pipe(
            map(res =>{ 
            	return <Activity[]>res;
            })
        );
    }

    addActivity(activityId: number, changes: Partial<Activity>) {
        
        return this.http.post(`${AppConfig.baseUrl}/workflowlevel2/`, changes, { headers : this.headers});
    }

    saveActivity(activityId: number, changes: Partial<Activity>) {
        
        return this.http.put(`${AppConfig.baseUrl}/workflowlevel2/${activityId}/`, changes, { headers : this.headers});
    }

    deleteActivity(activityId: number) {
        
        return this.http.delete(`${AppConfig.baseUrl}/workflowlevel2/${activityId}/`, { headers : this.headers});
    }
}