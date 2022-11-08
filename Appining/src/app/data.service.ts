import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  private newUser = new BehaviorSubject<any>({
    firstName: '',
    email: '',
    g: ''
  });

  setNewUserInfo(user: any) {
    this.newUser.next(user);
  }

  getNewUserInfo() {
    return this.newUser.asObservable();
  }
}
