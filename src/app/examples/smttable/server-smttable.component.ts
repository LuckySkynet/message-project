import { Component, OnInit } from '@angular/core';
import { SmttableService } from './smttable.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'server-st',
    templateUrl: 'server-smttable.component.html'
})

export class ServerSmttableComponent implements OnInit {

    settings = {
        columns: {
            id: {
                title: 'ID',
                editable: false,
                addable: false,
            },


            name: {
                title: 'Full Name',
            },
            username: {
                title: 'User Name',
            },
            email: {
                title: 'Email',
            },
        },
    };

    public source: LocalDataSource;

    constructor(
        public smttableService: SmttableService
    ) {
        this.source = new LocalDataSource();
        this.smttableService.getUsers()
            .subscribe(data => {
                console.info(data);
                this.source.load(data);
            })
    }

    ngOnInit() { }

}