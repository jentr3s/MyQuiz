import { Component } from '@angular/core';
import { ElectronService } from 'ngx-electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyQuiz';
  
  constructor(private _electronService: ElectronService) {}   // DI
  
  launchQuiz() {
    this._electronService.shell.openExternal('https://youtube.com');
  }

  launchWindow() {
    this._electronService.shell.openExternal('https://youtube.com');
  }
}
