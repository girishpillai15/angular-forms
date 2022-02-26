import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  column1: string;
  column2: string;
}

let ELEMENT_DATA: PeriodicElement[] = [
  {column1:'1', column2:'1'},
  {column1:'1', column2:'1'}
];
@Component({
  selector: 'app-tableheader',
  templateUrl: './tableheader.component.html',
  styleUrls: ['./tableheader.component.css']
})
export class TableheaderComponent implements AfterViewInit {
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private _liveAnnouncer: LiveAnnouncer) {}

  @ViewChild(MatSort)
  sort: MatSort = new MatSort;

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }


  displayedColumns = ['column1', 'column2']; 
  ngOnInit(): void {
  }

}
