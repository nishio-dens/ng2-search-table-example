import {OnInit, Component, ViewChild} from "@angular/core";
import {Paginator} from "ng2-paginator";
import {SearchTableComponent} from "ng2-search-table/ng2-search-table";
import {SimpleHeaderComponent} from "ng2-search-table/ng2-search-table";
import {SortableHeaderComponent} from "ng2-search-table/ng2-search-table";
import {TextFilterComponent} from "ng2-search-table/ng2-search-table";
import {SelectFilterComponent} from "ng2-search-table/ng2-search-table";
import {FromToTextFilterComponent} from "ng2-search-table/ng2-search-table";

@Component({
  moduleId: module.id,
  selector: "app-root",
  template: `
  <div class="container">
  <h3>SimpleSearchTable Example</h3>

  <hr>

  <div class="row">
  <div class="col-xs-12">
  <div class="col-xs-9">
    <button (click)="resetSearchCondition()" class="btn btn-default">
      Reset Search Condition
    </button>


    <label class="checkbox-inline">
      <input type="checkbox" [(ngModel)]="showId"
             (ngModelChange)="toggleShowHide('id', $event)">
      Id
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" [(ngModel)]="showStatus"
             (ngModelChange)="toggleShowHide('status', $event)">
      Status
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" [(ngModel)]="showName"
             (ngModelChange)="toggleShowHide('name', $event)">
      Name
    </label>
    <label class="checkbox-inline">
      <input type="checkbox" [(ngModel)]="showPrice"
             (ngModelChange)="toggleShowHide('price', $event)">
      Price
    </label>
  </div>
  <div class="col-xs-3 text-right form-inline">
    <label>Items per page:</label>
    <select class="form-control input-sm"
      [(ngModel)]="currentPagePer"
      (ngModelChange)="onChangePagePer($event)">
      <option *ngFor="let per of selectablePers" [value]="per">
        {{per}}
      </option>
    </select>
  </div>
  </div>
  </div>

  <div class="row">
  <div class="col-xs-12">
    <search-table #searchTable [tableClass]="'table table-condensed table-responsive table-hover'"
                  [columns]="headerComponents" [config]="searchTableConfig">
      <tr *ngFor="let row of searchTable.dataRows">
        <td [hidden]="!showId">{{row.id}}</td>
        <td [hidden]="!showStatus">
          <label class="label label-danger" *ngIf="row.status == 'inactive'">Inactive</label>
          <label class="label label-success" *ngIf="row.status == 'active'">Active</label>
        </td>
        <td [hidden]="!showName">{{row.name}}</td>
        <td [hidden]="!showPrice">{{row.price}}</td>
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
  </div>

  </div>
  `
})
export class AppComponent implements OnInit {
  @ViewChild(SearchTableComponent) searchTable: SearchTableComponent;

  private DEFAULT_PAGE_PER: number = 10;

  selectablePers: any = [10, 20, 50, 100];
  currentPagePer: number = this.DEFAULT_PAGE_PER;

  searchTableConfig: any = {
    url: "http://localhost:3000/inventories",
    defaultPagePer: this.DEFAULT_PAGE_PER
  };
  headerComponents: any = [
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

  showId: boolean = true;
  showStatus: boolean = true;
  showName: boolean = true;
  showPrice: boolean = true;

  ngOnInit() {
    this.searchTable.setSortDirection("id", "asc");
    this.showStatus = false;
    this.searchTable.setVisibility("status", false);
  }

  onChangePagePer(per: number) {
    this.searchTable.setPagePer(per);
    console.log("change page per to " + per);
  }

  onPageChange(currentPage: number): void {
    this.searchTable.setCurrentPage(currentPage);
    console.log("current page " + currentPage);
  }

  resetSearchCondition(): void {
    this.searchTable.setSortDirection("id", "asc");
    this.searchTable.setFilterValue("id", "");
    this.searchTable.setFilterValue("status", "");
    this.searchTable.setFilterValue("name", "");
    this.searchTable.setFilterValue("price", "", "priceFrom");
    this.searchTable.setFilterValue("price", "", "priceTo");
    this.searchTable.search();
  }

  toggleShowHide(name: string, visible: boolean): void {
    this.searchTable.setVisibility(name, visible);
    console.log(name + " visible: " + visible);
  }
}
