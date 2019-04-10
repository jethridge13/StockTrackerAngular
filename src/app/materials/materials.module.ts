import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
    MatToolbarModule
  ],
  exports: [
      MatButtonModule,
      MatCardModule,
      MatDividerModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatListModule,
      MatMenuModule,
    MatToolbarModule
  ]
})
export class MaterialsModule { }
