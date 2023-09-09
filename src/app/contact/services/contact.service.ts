import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { AxiosService } from '../../axios.service';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  constructor(private axiosService: AxiosService) { }


  listContacts(): Contact[] {
    this.axiosService.request(
      "GET",
      "/contact",
      JSON.stringify({})
    ).then(response => {
      Object.values(response.data).map((value: any) => {
        this.contacts.push({
          _id: value.id,
          active: value.active,
          email: value.email,
          phone: value.phone,
          cellPhone: value.cellPhone,
          name: value.name,
          lastName: value.lastName,
          cpfCnpj: value.cpfCnpj,
          rgIe: value.rgIe,
        });
      });
    });
    return this.contacts;
  }


  list(): Contact[] {
    return [
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
  }
}
