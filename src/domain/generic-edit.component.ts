import { OnInit } from '@angular/core';
import { GenericService } from './generic.service';

export abstract class GenericEditComponent<T> {

    options: any;
    loading: boolean;

    constructor(
    ) {
        this.inicializaOptions();
    }

    inicializaOptions() {
        this.options = {};
        this.options.isEdicion = true;
    }
}
