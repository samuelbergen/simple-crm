import { Component, OnInit } from '@angular/core';
import { User } from 'src/models/user.class';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialogRef } from '@angular/material/dialog';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Component({
  selector: 'app-dialog-add-user',
  templateUrl: './dialog-add-user.component.html',
  styleUrls: ['./dialog-add-user.component.scss']
})
export class DialogAddUserComponent implements OnInit {

  user: User = new User();
  loading: boolean = false;
  birthDate: Date = new Date('');
  file: string = '';
  imgPath: string = '';

  constructor
    (public dialogRef: MatDialogRef<DialogAddUserComponent>,
      private firestore: AngularFirestore,
      private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
  }

  async saveUser() {
    this.loading = true;
    this.user.birthDate = this.birthDate.getTime();
    console.log('this is the user', this.user);
    await this.firestore.collection('users')
      .add(this.user.toJSON())
      .then((result: any) => {
        this.loading = false;
        console.log('this is the result', result);
        this.dialogRef.close();
      });
  }
}