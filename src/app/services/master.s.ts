import { apiEndpoints } from '../core/constants/api.endpoint';
import { ApplicationRef, Injectable } from '@angular/core';
import { ApiManager } from 'src/app/core/utilities/api-manager';
import { AppStorage } from 'src/app/core/utilities/app-storage'
import { session } from '../core/constants/session';

@Injectable({
  providedIn: 'root'
})

export class MasterService {
  private headers: any = [];
  constructor(private apiManager: ApiManager, private storage: AppStorage) { }

  private getHeaders = () => {
    this.headers = [];
    let token = this.storage.get(session.TOKEN);
    let servingCity = this.storage.get(session.SERVING_CITY);
    if (token != null) {
      this.headers.push({ 'Authorization': `Bearer ${token}` });
    }
  }
  // demo
  // async deleteHub(data:any){
  //   this.getHeaders()
  //   return this.apiManager.request({url:apiEndpoints.URL,method:'POST'},data,this.headers);
  // }

}
