import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/models/user.class';
import { DialogDeleteUserComponent } from '../dialog-delete-user/dialog-delete-user.component';
import { DialogEditAddressComponent } from '../dialog-edit-address/dialog-edit-address.component';
import { DialogEditUserComponent } from '../dialog-edit-user/dialog-edit-user.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  userId: string = '';
  user: User = new User();

  constructor(private firestore: AngularFirestore, private route: ActivatedRoute, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.userId = paramMap.get('id')!;
      console.log('ID: ', this.userId);
      this.getUser();
    });
  }

  getUser() {
    this.firestore
      .collection('users')
      .doc(this.userId)
      .valueChanges().subscribe((user: any) => {
        this.user = new User(user);
        console.log(this.user);
      });
  }

  editUserDetail() {
    const dialog = this.dialog.open(DialogEditUserComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  editAddressMenu() {
    const dialog = this.dialog.open(DialogEditAddressComponent);
    dialog.componentInstance.user = new User(this.user.toJSON());
    dialog.componentInstance.userId = this.userId;
  }

  deleteUser() {
    const dialog = this.dialog.open(DialogDeleteUserComponent);
    dialog.componentInstance.userId = this.userId;
  }

}
