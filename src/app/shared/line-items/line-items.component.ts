import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-line-items',
  templateUrl: './line-items.component.html',
  styleUrls: ['./line-items.component.css']
})
export class LineItemsComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  constructor(private http: HttpClient) { }

  public displayedColumns = 
    [
      'name',
      'quantity',
      'unit_price',
      'total',
    ];
    public dataSource = new MatTableDataSource();


  

  ngOnInit(): void {
    // this.dataSource = this.dataSource.filteredData;
    var wsData = this.http.get('./assets/data.json', {responseType: 'text'});

    wsData.subscribe(data => {
      var tableData = JSON.parse(data);
      tableData = tableData.filter( x=> x.type === 'line_item')
      console.log(tableData)
      this.dataSource = new MatTableDataSource(tableData); 
      this.table.dataSource = this.dataSource;
    })
  }

}
