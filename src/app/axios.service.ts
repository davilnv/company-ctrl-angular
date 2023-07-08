import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AxiosService {

  constructor() {
    axios.defaults.baseURL = 'http://localhost:8081/api/v1';
    axios.defaults.headers.post['Content-Type'] = 'application/json';
  }

  getAuthToken() : string | null {
    return window.localStorage.getItem('acessToken');
  }

  setAuthToken(token: string | null) : void {
    if (token != null) {
      window.localStorage.setItem('acessToken', token);
    } else {
      window.localStorage.removeItem('acessToken');
    }
  }

  request(method: string, url: string, data: string) : Promise<any> {

    let headers = {};

    if (this.getAuthToken() != null) {
      headers = {
        "Authorization": "Bearer " + this.getAuthToken()
      }
    }

    return axios({
      method: method,
      url: url,
      data: data,
      headers: headers
    });
  }

}
