import { Observable, Subject } from 'rxjs';

import { Injectable } from '@angular/core';
// import { UserData } from '@interfaces/user-data.interface';

@Injectable()
export class CommunicationProvider {

  private requestInterceptedSource: Subject<number> = new Subject<number>();
  // private userDataSubject = new Subject<UserData>();
  // public requestIntercepted: Observable<number> = this.requestInterceptedSource.asObservable();
  // public userData$: Observable<UserData> = this.userDataSubject.asObservable();

  public getInterceptedSource(): Subject<number> {
    return this.requestInterceptedSource;
  }

  // public getUserData(): Observable<UserData> {
  //   return this.userDataSubject.asObservable();
  // }

  // public setUserData(userData: UserData, error?: any): void {
  //   if (error) { this.userDataSubject.error(error); }
  //   this.userDataSubject.next(userData);
  // }
}
