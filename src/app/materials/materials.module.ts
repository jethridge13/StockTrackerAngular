import { NgModule } from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
    MatToolbarModule
  ],
  exports: [
      MatButtonModule,
      MatIconModule,
      MatMenuModule,
    MatToolbarModule
  ]
})
export class MaterialsModule { }
