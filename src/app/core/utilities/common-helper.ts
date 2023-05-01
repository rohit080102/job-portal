import { AppStorage } from './app-storage';
import { Injectable } from '@angular/core';
import { swalHelper } from '../constants/swal.helper';

@Injectable({
  providedIn: 'root',
})
export class CommonHelper {
  constructor(private appStorage: AppStorage) {}
  
  logout = () => {
    swalHelper
      .takeConfirmation('Logout', 'Do you really want to logout?', 'Logout')
      .then((result) => {
        if (result.isConfirmed) {
          this.appStorage.clear();
          window.location.href = '/';
        }
      });
  };
}
