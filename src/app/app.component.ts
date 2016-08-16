import {OnInit, Component, ViewChild} from "@angular/core";
import {Paginator} from "ng2-paginator";
import {SearchTableComponent} from "ng2-search-table/components/search-table.component";
import {SimpleHeaderComponent} from "ng2-search-table/components/header/simple-header.component";
import {SortableHeaderComponent} from "ng2-search-table/components/header/sortable-header.component";
import {TextFilterComponent} from "ng2-search-table/components/table-filter/text-filter.component";
import {SelectFilterComponent} from "ng2-search-table/components/table-filter/select-filter.component";
import {FromToTextFilterComponent} from "ng2-search-table/components/table-filter/from-to-text-filter.component";

@Component({
  moduleId: module.id,
  selector: "app-root",
  directives: [Paginator], // FIXME: deprecated
  template: `
  <div class="container"><div class="row">
  <h3>SimpleSearchTable Example</h3>
  <div class="col-xs-12">
    <search-table #searchTable [tableClass]="'table table-condensed table-responsive table-hover'"
                  [columns]="headerComponents" [config]="{url: 'http://localhost:3000/inventories/'}">
      <tr *ngFor="let row of searchTable.dataRows">
        <td>{{row.id}}</td>
        <td>
          <label class="label label-danger" *ngIf="row.status == 'inactive'">Inactive</label>
          <label class="label label-success" *ngIf="row.status == 'active'">Active</label>
        </td>
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
export class AppComponent implements OnInit {
  @ViewChild(SearchTableComponent) searchTable: SearchTableComponent;

  headerComponents: any;

  ngOnInit() {
    this.headerComponents = [
      {
        name: "id",
        model: {displayName: "Id"},
        headerComponent: SortableHeaderComponent,
        filterComponent: TextFilterComponent
      },
      {
        name: "status",
        model: {
          displayName: "Status",
          selectValues: [
            { },
            { id: "inactive", name: "Inactive" },
            { id: "active", name: "Active" }
          ]
        },
        headerComponent: SortableHeaderComponent,
        filterComponent: SelectFilterComponent
      },
      {
        name: "name",
        model: {displayName: "Name"},
        headerComponent: SortableHeaderComponent,
        filterComponent: TextFilterComponent
      },
      {
        name: "price",
        model: {
          displayName: "Price",
          multipleFilter: [
            {
              name: "priceFrom",
              placeholder: "From"
            },
            {
              name: "priceTo",
              placeholder: "To"
            }
          ]
        },
        headerComponent: SimpleHeaderComponent,
        filterComponent: FromToTextFilterComponent
      },
    ];
  }

  onPageChange(currentPage: number): void {
    this.searchTable.setCurrentPage(currentPage);
    console.log("current page " + currentPage);
  }
}
