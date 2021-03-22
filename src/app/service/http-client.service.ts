import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  protected urlBase!: string;

  constructor(@Inject(HttpClient) protected httpClient: any,@Inject(Router) protected router: any) {
    this.urlBase = '';
   }

   private getResponse(http: any) {
    return new Promise((resolve: any, reject: any) => {
      http.subscribe((res:any) => {
        resolve(res);
      }, (error: any) => {
        switch (error.status) {
          case 400:
            reject('La información enviada no es correcta');
            break;
          case 401:
            reject('La ');
            break;
          case 402:
            reject('La ');
            break;
          case 403:
            reject('La ');
            break;
          case 404:
            reject('La ');
            break;
          case 500:
            reject('La ');
            break;
        }
      });
    });
   }
   protected get(url: string): Promise<any> {
    return this.getResponse(this.httpClient.get(`${this.urlBase}${url}`));
   }
}
