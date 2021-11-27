import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AllDataService {
  private wsData;

  constructor(private http: HttpClient) { }
  getData() {
    var wsData = this.http.get('./assets/data.json', {responseType: 'text'});
    wsData.subscribe(data => {
      var tableData = JSON.parse(data);
      tableData = tableData.filter( x=> x.type === 'line_item')
      // console.log(tableData)
      
    })
    return this.wsData;
  }
}
