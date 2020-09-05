import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform(value: any) {
        if (value) {
            return value.split(' ').map(val => val.charAt(0).toUpperCase() + val.slice(1)).join(' ')
        }
        return value;
    }
}