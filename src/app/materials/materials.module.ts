import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      MatButtonModule,
      MatIconModule,
    MatToolbarModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule,
    MatToolbarModule
  ]
})
export class MaterialsModule { }
