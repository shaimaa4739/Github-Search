import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRepoListComponent } from './user-repo-list.component';

describe('UserRepoListComponent', () => {
  let component: UserRepoListComponent;
  let fixture: ComponentFixture<UserRepoListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserRepoListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserRepoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
