import {Injectable} from "@angular/core";
import {HttpClient, HttpParams, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Program} from "../models/program.model";
import {map} from "rxjs/operators";
import AppConfig from "../config";

@Injectable()
export class ProgramsService {
    headers = new  HttpHeaders({
        'Authorization': `${AppConfig.token}`,
    });

    constructor(private http:HttpClient) {

    }

    /**
    * Function to Get all programs from server
    */
    findAllPrograms(): Observable<Program[]>  {
        return this.http.get<Program[]>(`${AppConfig.baseUrl}/workflowlevel1/`, { headers : this.headers}).pipe(
            map(res =>{ 
            	return <Program[]>res;
            })
        );
    }
}