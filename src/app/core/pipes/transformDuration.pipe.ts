import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'transformDuration'})
export class TransformDuration implements PipeTransform {
    transform(duration: number): string {
        const hours = Math.floor(duration/60);
        const minutes = duration%60;
        return `${hours || ''} ${hours ? 'h' : ''} ${minutes || ''} ${minutes ? 'm' : ''}`;
    }
}
