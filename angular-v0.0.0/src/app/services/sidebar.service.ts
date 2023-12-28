import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any[] = [
    {
      title: 'Dashboard',
      icon: 'mdi mdi-gauge',
      subMenu: [
        {title: 'Main', url: '/'},
        {title: 'ProgressBar', url: '/dashboard/progress'},
        {title: 'Charts', url: '/dashboard/grafica1'}
      ]
    }
  ]
  constructor() { }
}
