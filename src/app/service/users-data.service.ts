import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UsersDataService {
  constructor(private http: HttpClient) {
  }

  url: string = ''

// after creating service, you have to ( import HttpClientModule & mention it in imports array ) inside app.module.ts
  users() {
    return this.http.get(this.url)
  }

  saveUser(data: any) {
    return this.http.post(this.url, data)
  }
}
