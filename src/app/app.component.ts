import {Component, ViewChild} from "@angular/core";
import {Paginator} from "ng2-paginator";
import {SearchTableComponent} from "ng2-search-table/src/components/search-table.component";

@Component({
  moduleId: module.id,
  selector: "app-root",
  directives: [Paginator], // FIXME: deprecated
  template: `
  <div class="container"><div class="row">
  <h3>SimpleSearchTable Example</h3>
  <div class="col-xs-12">
    <search-table #searchTable [tableClass]="'table table-condensed table-responsive table-hover'"
                  [columns]="" [config]="{url: 'http://localhost:3000/inventories/'}">
      <tr *ngFor="let row of searchTable.dataRows">
        <td>{{row.id}}</td>
        <td>{{row.name}}</td>
        <td>{{row.price}}</td>
      </tr>
    </search-table>

    <paginator [total]="searchTable.getTotalCount()"
      [onPage]="searchTable.getPagePer()"
      [currentPage]="searchTable.getCurrentPage()"
      [maxVisible]="5"
      (onChange)="onPageChange($event)"
      [directionLinks]="true"
      directionNextLabel="Next" directionPreviousLabel="Prev"
      [boundaryLinks]="true" boundaryFirstLabel="First" boundaryLastLabel="Last"
      [hideOnSinglePage]="false">
    </paginator>
  </div>

  </div></div>
  `
})
export class AppComponent {
  @ViewChild(SearchTableComponent) searchTable: SearchTableComponent;

  onPageChange(currentPage: number): void {
    this.searchTable.setCurrentPage(currentPage);
    console.log("current page " + currentPage);
  }
}
