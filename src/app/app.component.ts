import { Component } from '@angular/core';
import './training'
import { Colors } from '../enums/Color';
import './collection';
import { IOffer } from '../interfaces/IOffer'
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  companyName: string = 'РумТибет';
  companySloganPart1: string = 'насладись прогулкой в горах';
  companySloganPart2: string = 'с командой единомышленников';
  locationInput: string = '';
  dateInputForm: string = '';
  participantsInput: string = '';
  isBlockVisible: boolean = false;
  clickCount: number = 0;
  liveInput: string = '';
  isLoading: boolean = true;

  offers: IOffer[] = [
    {
      id: 1,
      title: 'Опытный гид',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/people.svg',
    },
    {
      id: 2,
      title: 'Безопасный поход',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/shield.svg',
    },
    {
      id: 3,
      title: 'Лояльные цены',
      description: 'Для современного мира базовый вектор развития предполагает независимые способы реализации соответствующих условий активизации.',
      icon: '/images/price-tag.svg',
    },
  ]
  nowDate: string = new Date().toLocaleString('ru-RU').replace(',', '');;


  constructor() {
    // console.log(this.checkColor(Colors.RED));
    this.showLastEntry();
    this.showQuanityOfEntries();
    setInterval(() => {
      this.nowDate = new Date().toLocaleString('ru-RU').replace(',', '');
    }, 1000)
    this.onInit();
  }



  private checkColor(color: Colors): boolean {
    if (color === Colors.RED || color === Colors.GREEN || color === Colors.BLUE) {
      return true;
    }
    return false;
  }


  private showLastEntry(): void {
    const lastEntry = new Date().toDateString();
    localStorage.setItem('lastEntry', lastEntry);
 }

  private showQuanityOfEntries(): void {
    let currentCount = Number(localStorage.getItem('qunityEntries')) || 0;

    currentCount++;

    localStorage.setItem('qunityEntries', String(currentCount));
 }

  toggleBlock(): void {
    this.isBlockVisible = !this.isBlockVisible;
 }

  increment(): void {
    this.clickCount++;
  }

  decrement(): void {
    if (this.clickCount > 0) {
      this.clickCount--;
    }
  }

  onInit(): void {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
  }
}
