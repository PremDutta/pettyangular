import { Component, OnInit } from '@angular/core';
import {UserService} from '../user.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented');
  }

  constructor( public dialog: MatDialog) {}

    openDialog() {
      this.dialog.open(DashboardComponent, {
        data: {

        }
      });
    }
  }


