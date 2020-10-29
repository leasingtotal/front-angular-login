import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css'],
})
export class TablasComponent implements OnDestroy , OnInit {
  private url = 'http://10.50.1.137:3434';

  dtOptions: DataTables.Settings = {};
  dtTrigger = new Subject();
  data: any;
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 2,
      language:{
        url: '//cdn.datatables.net/plug-ins/1.10.21/i18n/Spanish.json'
      }
    };
    this.http
      .get('http://dummy.restapiexample.com/api/v1/employees')
      .subscribe((res: any) => {
        this.data = res.data;
        this.dtTrigger.next();
      });
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }
}
