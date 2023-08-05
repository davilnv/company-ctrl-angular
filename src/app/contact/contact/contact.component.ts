import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-contact',
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class ContactComponent implements AfterViewInit {

  ELEMENT_DATA: Contact[] = [
    {
      _id: 1,
      active: true,
      email: 'string',
      phone: 'string',
      cellPhone: 'string',
      name: 'string',
      lastName: 'string',
      cpfCnpj: 'string',
      rgIe: 'string',
    }
  ];

  displayedColumns: string[] = ['_id', 'active', 'email', 'phone', 'cellPhone', 'name', 'cpfCnpj', 'rgIe'];
  dataSource = new MatTableDataSource<Contact>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
