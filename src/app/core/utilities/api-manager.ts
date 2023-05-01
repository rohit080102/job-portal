import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ApiManager {
  constructor(private http: HttpClient) { }
  private setHeaders = (headersInArray: any) => {
    let headers: any = {};
    headersInArray.forEach((element: any) => {
      Object.keys(element).forEach((key) => {
        headers[key] = element[key];
      });
    });
    return { headers: headers };
  }

  request(config: { url: string, method: string }, data: any, headers: any[])  {
    console.log(data);
    console.log(this.setHeaders(headers));
    switch (config.method) {
      case 'GET':
        return lastValueFrom(this.http.get<OutputModel>(config.url, this.setHeaders(headers)));
      case 'POST':
        return lastValueFrom(this.http.post<OutputModel>(config.url, data, this.setHeaders(headers)));
      case 'PUT':
        return lastValueFrom(this.http.put<OutputModel>(config.url, data, this.setHeaders(headers)));
      default:
        return lastValueFrom(this.http.delete<OutputModel>(config.url, this.setHeaders(headers)));
    }
  }
}

export interface OutputModel {
  message: string;
  data: any;
  status: number;
}
