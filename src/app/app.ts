import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Angular SPA</h1>
    <button (click)="callApi()">Call API</button>
    <p>{{ message }}</p>
  `,
})
export class App implements OnInit {
  message = '';

  ngOnInit() {}

  async callApi() {
    const res = await fetch('http://localhost/api/hello');
    const data = await res.json();
    this.message = data.message;
  }
}
