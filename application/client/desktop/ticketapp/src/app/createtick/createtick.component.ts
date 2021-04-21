import { Component, OnInit } from '@angular/core';
import { CreatetickService } from './createtick.service';

@Component({
  selector: 'app-createtick',
  templateUrl: './createtick.component.html',
  styleUrls: ['./createtick.component.scss'],
})

export class CreatetickComponent implements OnInit {
    public MainTicket = {
        name: '',
        description: '',
        groups: '',
        types: '',
        severity: '',
    }

    constructor (
        private createtickService: CreatetickService,
    ) { }

    ngOnInit() {
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.createtickService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
}