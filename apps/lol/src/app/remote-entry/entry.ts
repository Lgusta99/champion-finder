import { Component } from '@angular/core';
import { MainPage } from '../pages/main-page/main-page';

@Component({
  imports: [
    MainPage
  ],
  selector: 'app-lol-entry',
  template: `<app-main-page></app-main-page>`,
})
export class RemoteEntry {}
