import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { User } from 'src/models/user.class';

@Component({
  selector: 'app-dialog-edit-user',
  templateUrl: './dialog-edit-user.component.html',
  styleUrls: ['./dialog-edit-user.component.scss']
})
export class DialogEditUserComponent implements OnInit {
  user: User = new User();
  userId: string = '';
  loading: boolean = false;
  birthDate: any;

  constructor(private firestore: AngularFirestore, public dialogRef: MatDialogRef<DialogEditUserComponent>) { }

  ngOnInit(): void {
    this.birthDate = new Date(this.user.birthDate);
  }

  saveUser() {
    this.user.birthDate = this.birthDate.getTime();
    console.log(this.user);
    this.loading = true;
    this.firestore.collection('users').doc(this.userId)
      .update(this.user.toJSON())
      .then(() => {
        this.loading = false;
        this.dialogRef.close();
      });
  }
}
