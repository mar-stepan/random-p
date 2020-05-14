import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss']
})
export class GenerateComponent implements OnInit {

  chanel: BroadcastChannel;
  random = Math.floor(Math.random() * 100);

  constructor() {
  }

  ngOnInit(): void {
    this.chanel = new BroadcastChannel('calculate');

    this.chanel.onmessage = ({data}) => {
      if (data.event === 'close') {
        if (this.random % 2 === 0 && this.random !== data.currentPageID) {
          self.close();
        }
      }
    };
  }

  closeTab(): void {
    this.chanel.postMessage({
      currentPageID: this.random,
      event: 'close',
    });
  }
}
