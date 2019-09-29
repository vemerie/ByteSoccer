import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-navbar-one',
  templateUrl: './navbar-one.component.html',
  styleUrls: ['./navbar-one.component.css']
})
export class NavbarOneComponent implements OnInit {

  private items: MenuItem[];

    ngOnInit() {
        this.items = [{
            label: 'File',
            items: [
                {label: 'New', icon: 'fa fa-plus'},
                {label: 'Open', icon: 'fa fa-download'}
            ]
        },
        {
            label: 'Edit',
            items: [
                {label: 'Undo', icon: 'fa fa-refresh'},
                {label: 'Redo', icon: 'fa fa-repeat'}
            ]
        }];
    }

}
