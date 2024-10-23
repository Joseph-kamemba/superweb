import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-dialog',
  standalone: true,
  imports: [],
  templateUrl: './forgot-dialog.component.html',
  styleUrl: './forgot-dialog.component.css'
})
export class ForgotDialogComponent {

  constructor(public dialogRef: MatDialogRef<ForgotDialogComponent>,
    private router: Router
  ){}

onCancel(): void{
  this.dialogRef.close();
}

onConfirm(): void{
  this.router.navigateByUrl('/forgotpassword')
  this.dialogRef.close(true);
}
}
