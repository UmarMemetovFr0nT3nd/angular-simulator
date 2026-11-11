import { Component } from '@angular/core';
import './training'
import { Colors } from '../enums/Color';
import './collection';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor() {
    console.log(this.checkColor(Colors.RED));
    this.showLastEntry();
    this.showQuanityOfEntries();
  }


  companyName: string = 'РумТибет';
  companySlogan: string = 'насладись прогулкой в горах с командой единомышленников';


  checkColor(color: Colors): boolean {
    if (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) {
      return true;
    }
    return false;
  }


  showLastEntry(): void {
    const lastEntry = new Date().toDateString();
    localStorage.setItem('lastEntry', lastEntry);
 }

 showQuanityOfEntries(): void {
  let currentCount = Number(localStorage.getItem('qunityEntries')) || 0;

  currentCount++;

  localStorage.setItem('qunityEntries', String(currentCount));
 }
}
