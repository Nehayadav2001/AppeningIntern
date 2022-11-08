import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  updateUserInfo: any;

  constructor(private dataService: DataService) { }
  
  ngOnInit(): void {
    this.dataService.getNewUserInfo().subscribe(info => {
      this.updateUserInfo = info;
    })
  }

}
