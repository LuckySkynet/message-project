import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
    selector: 'base-st',
    templateUrl: 'base-smttable.component.html'
})

export class BaseSmttableComponent implements OnInit {

    @ViewChild('search') searchEl: ElementRef;

    source: LocalDataSource; // add a property to the component
    data = [
        {
            id: 1,
            name: 'Leanne Graham',
            username: 'Bret',
            email: 'Sincere@april.biz',
            notShownField: true,
        },
        {
            id: 2,
            name: 'Ervin Howell',
            username: 'Antonette',
            email: 'Shanna@melissa.tv',
        },
        {
            id: 3,
            name: 'Clementine Bauch',
            username: 'Samantha',
            email: 'Nathan@yesenia.net',
        },
        {
            id: 4,
            name: 'Patricia Lebsack',
            username: 'Karianne',
            email: 'Julianne.OConner@kory.org',
        },
        {
            id: 5,
            name: 'Chelsey Dietrich',
            username: 'Kamren',
            email: 'Lucio_Hettinger@annie.ca',
        },
        {
            id: 6,
            name: 'Mrs. Dennis Schulist',
            username: 'Leopoldo_Corkery',
            email: 'Karley_Dach@jasper.info',
        },
        {
            id: 7,
            name: 'Kurtis Weissnat',
            username: 'Elwyn.Skiles',
            email: 'Telly.Hoeger@billy.biz',
        },
        {
            id: 8,
            name: 'Nicholas Runolfsdottir V',
            username: 'Maxime_Nienow',
            email: 'Sherwood@rosamond.me',
        },
        {
            id: 9,
            name: 'Glenna Reichert',
            username: 'Delphine',
            email: 'Chaim_McDermott@dana.io',
        },
        {
            id: 10,
            name: 'Clementina DuBuque',
            username: 'Moriah.Stanton',
            email: 'Rey.Padberg@karina.biz',
        },
        {
            id: 11,
            name: 'Nicholas DuBuque',
            username: 'Nicholas.Stanton',
            email: 'Rey.Padberg@rosamond.biz',
        },
    ];

    settings = {
        delete: {
            confirmDelete: true,
        },
        add: {
            confirmCreate: true,
        },
        edit: {
            confirmSave: true,
        },
        columns: {
            id: {
                title: 'ID',
                filter: false
            },
            name: {
                title: 'Full Name',
                filter: false
            },
            username: {
                title: 'User Name',
                filter: false
            },
            email: {
                title: 'Email',
                filter: false
            }
        }
    };


    constructor() {
        console.info(this.data);
        this.source = new LocalDataSource(this.data); // create the source
    }


    ngOnInit() {
    }

    reset() {
        this.source.reset(false);
        //重置属性值
        this.searchEl.nativeElement.value = '';
    }

    onDeleteConfirm($event) {
        if (window.confirm('Are you sure you want to delete?')) {
            $event.confirm.resolve();
        } else {
            $event.confirm.reject();
        }
    }

    onSaveConfirm($event) {
        if (window.confirm('Are you sure you want to save?')) {
            $event.newData['name'] += ' + added in code';
            $event.confirm.resolve($event.newData);
        } else {
            $event.confirm.reject();
        }
    }

    onCreateConfirm($event) {
        if (window.confirm('Are you sure you want to create?')) {
            $event.newData['name'] += ' + added in code';
            $event.confirm.resolve($event.newData);
        } else {
            $event.confirm.reject();
        }
    }
    onSearch(query: string = '') {
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'id',
                search: query
            },
            {
                field: 'name',
                search: query
            },
            {
                field: 'username',
                search: query
            },
            {
                field: 'email',
                search: query
            }
        ], false);
    }
}