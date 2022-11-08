import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  btnClickedMale = true;
  btnClickedFemale = false;

  firstName!: string;
  email!: string;


  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }
  male() {
    this.btnClickedMale = true;
    this.btnClickedFemale = false;
  }

  female() {
    this.btnClickedMale = false;
    this.btnClickedFemale = true;
  }

  submitBtn() {
    this.dataService.setNewUserInfo({
      firstName: this.firstName,
      email: this.email,
    });
  }

}
