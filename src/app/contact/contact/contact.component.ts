import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { Contact } from '../model/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact',
  styleUrls: ['./contact.component.css'],
  templateUrl: './contact.component.html',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule],
})
export class ContactComponent implements AfterViewInit, OnInit {

  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {

  }

  ngOnInit(): void {
    this.contacts = this.contactService.listContacts();
    console.log(this.contacts);
  }

  displayedColumns: string[] = ['_id', 'active', 'email', 'phone', 'cellPhone', 'name', 'cpfCnpj', 'rgIe'];
  dataSource = new MatTableDataSource<Contact>(this.contacts);

  @ViewChild(MatPaginator) paginator: any;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
