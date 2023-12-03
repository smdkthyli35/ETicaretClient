import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { OrderDetailDialogComponent } from './order-detail-dialog/order-detail-dialog.component';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CompleteOrderDialogComponent } from './complete-order-dialog/complete-order-dialog.component';


@NgModule({
  declarations: [DeleteDialogComponent, FileUploadDialogComponent, OrderDetailDialogComponent, CompleteOrderDialogComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule, MatTableModule, MatToolbarModule],
})
export class DialogModule {}
