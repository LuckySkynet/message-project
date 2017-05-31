import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Phone } from '../message-model/phone.model';

@Injectable()
export class MessageService {
  public phonesURL = 'api/phones';
  constructor(public http: Http) { }

  /*
   * get the phone list
   * @memberof MessageService
   */
  public getPhones(): Observable<Phone[]> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.phonesURL, options)
      .map((res: Response) => {
        return res.json().data
      })
  }

}

