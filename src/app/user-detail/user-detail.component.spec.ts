import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { RouterModule } from '@angular/router';
import { environment } from 'src/environments/environment';

import { UserDetailComponent } from './user-detail.component';

describe('UserDetailComponent', () => {
  let component: UserDetailComponent;
  let fixture: ComponentFixture<UserDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MatMenuModule, MatDialogModule, AngularFireModule.initializeApp(environment.firebase), AngularFirestoreModule, RouterModule.forRoot([]) ],
      declarations: [UserDetailComponent],
      providers: [{
        provide: MatDialogRef,
        useValue: {}
      }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(UserDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
