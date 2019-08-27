import { NgModule } from '@angular/core';
import {
    MatToolbarModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatListModule
} from '@angular/material';

import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule} from '@angular/material/card';

@NgModule({
    imports:[
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatCardModule
    ],
    exports:[
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatCardModule
    ]
})

export class MaterialModule {}