import { Injectable } from '@angular/core';
import { ApiManager } from 'src/app/core/utilities/api-manager';
import { AppStorage } from 'src/app/core/utilities/app-storage'
import { session } from '../core/constants/session';
import { apiEndpoints } from '../core/constants/api.endpoint';
import { swalHelper } from '../core/constants/swal.helper';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private headers: any = [];
  constructor(
    private ngxService: NgxUiLoaderService,
    private apiManager: ApiManager,
    private storage: AppStorage
  ) { }

  private getHeaders = () => {
    this.headers = [];
    let token = this.storage.get(session.TOKEN);
    if (token != null) {
      this.headers.push({ 'Authorization': `Bearer ${token}` })
    }
  }



}
