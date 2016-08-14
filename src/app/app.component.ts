import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
  <div class="container"><div class="row">
  <h3>SimpleSearchTable Example</h3>
  <div class="col-xs-12">
    <button (click)="searchTable.dummyEvent()">Fire</button>
    <search-table #searchTable [tableClass]="'table table-condensed table-responsive table-hover'"
                  [columns]="" [config]="{url: 'http://localhost:3000/inventories/'}">
      <tr *ngFor="let row of searchTable.dataRows">
        <td>{{row.id}}</td>
        <td>ABCD</td>
        <td>
          Something
        </td>
      </tr>
    </search-table>
  </div>
  </div></div>
  `
})
export class AppComponent {
}
