import {Component, OnInit} from '@angular/core';
import {ListService} from '@kan_kda/test-lib';

@Component({
  selector: 'app-root',
  template: `
    
    <div tlBorder>I am bordered now</div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  list: string[] = [];

  constructor(private svc$: ListService) {
  }

  ngOnInit() {
    this.svc$.list.subscribe((value => this.list = [...this.list, value]));
  }
}