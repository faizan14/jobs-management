import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class JobsService {
  private baseUrl: string = `http://localhost:3000`;

  constructor(private http: HttpClient) { }
  getObjects<T>(param: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${param}`);
  }
}
