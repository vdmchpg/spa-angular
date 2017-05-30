import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';

/* App Root */
import { TransformDuration } from './index';

@NgModule({
    imports: [
        CommonModule,
    ],
    exports: [TransformDuration],
    declarations: [ TransformDuration ],

})

export class PipesModule { }
