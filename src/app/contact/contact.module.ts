import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [
  ],
  imports: [
    ContactComponent,
    CommonModule,
    ContactRoutingModule,
    MatTableModule
  ]
})
export class ContactModule { }
