import { OnInit, ViewChild } from '@angular/core';
import { GenericService } from './generic.service';

export abstract class GenericListComponent<T> implements OnInit {

    constructor(
        public service: GenericService<T>
    ) {

    }

    ngOnInit() {

    }



}