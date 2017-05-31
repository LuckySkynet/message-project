import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SmttableService {
  public usersURL = 'api/users';
  constructor(public http: Http) { }

  getUsers(): Observable<any> {
    return this.http.get(this.usersURL)
      .map((res: Response) => res.json().data)
  }

}
