import { Injectable } from '@angular/core';
import { Observable, Subject, ReplaySubject, BehaviorSubject } from "rxjs";
import { last } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class IdInfoService {
  private subject = new BehaviorSubject<any>(null);

  constructor() { }

  sendInfo(info: any) {
    this.subject.next(info);
  }

  clearInfo() {
    this.subject.next(null);
  }

  getInfo(): Observable<any> {
    return this.subject.asObservable();
  }
}
