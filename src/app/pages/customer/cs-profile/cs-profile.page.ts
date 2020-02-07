import { Component, OnInit } from '@angular/core';
import { CrudService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-cs-profile',
  templateUrl: './cs-profile.page.html',
  styleUrls: ['./cs-profile.page.scss'],
})
export class CsProfilePage implements OnInit {

  students: any;
  Name: string;
  Email: string;
  Number: number;
  Address: string;

  constructor(private crudService: CrudService) { }

  ngOnInit() {
    this.crudService.read_Students().subscribe(data => {
 
      this.students = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Email: e.payload.doc.data()['Email'],
          Number: e.payload.doc.data()['Number'],
          Address: e.payload.doc.data()['Address'],
        };
      })
      console.log(this.students);
 
    });
  }

  CreateRecord() {
    let record = {};
    record['Name'] = this.Name;
    record['Email'] = this.Email;
    record['Number'] = this.Number;
    record['Address'] = this.Address;
    this.crudService.create_NewStudent(record).then(resp => {
      this.Name = "";
      this.Email = "";
      this.Number = undefined;
      this.Address = "";
      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }
 
  RemoveRecord(rowID) {
    this.crudService.delete_Student(rowID);
  }
 
  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditEmail = record.Email;
    record.EditNumber = record.Number;
    record.EditAddress = record.Address;
  }
 
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Email'] = recordRow.EditName;
    record['Number'] = recordRow.EditNumber;
    record['Address'] = recordRow.EditAddress;
    this.crudService.update_Student(recordRow.id, record);
    recordRow.isEdit = false;
  }
}
