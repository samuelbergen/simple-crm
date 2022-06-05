import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { User } from 'src/models/user.class';
import { DialogAddUserComponent } from '../dialog-add-user/dialog-add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  user: User = new User();
  displayedColumns: string[] = ['name', 'email', 'city'];
  allUsers: User[] = [];

  constructor(private firestore: AngularFirestore, public dialog: MatDialog) {

  }

  ngOnInit(): void {
    this.firestore
    .collection('users')
    .valueChanges({idField: 'id'})
    .subscribe((changes: any) => {
      console.log(changes);
      this.allUsers = changes;
    });
  }

  openAddUserDialog() {
    this.dialog.open(DialogAddUserComponent);
  }

}
