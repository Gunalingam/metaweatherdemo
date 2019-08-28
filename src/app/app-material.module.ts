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
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
    imports: [
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule
    ],
    exports: [
        MatToolbarModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatListModule,
        MatCardModule,
        MatIconModule,
        MatTableModule,
        MatPaginatorModule
    ]
})

export class MaterialModule {}
