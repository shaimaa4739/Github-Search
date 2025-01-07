import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';
import { searchUsers } from '../../../features/search/store/searchusers.actions';
import { Store, StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { searchUserReducer } from '../../../features/search/store/searchusers.reducer';

describe('SearchBoxComponent', () => {
  let component: SearchBoxComponent;
  let fixture: ComponentFixture<SearchBoxComponent>;
  let store: Store;
  let dispatchSpy: jasmine.Spy;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ReactiveFormsModule,
        StoreModule.forRoot({
          users: searchUserReducer 
        }),
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchBoxComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(Store); 
    dispatchSpy = spyOn(store, 'dispatch'); 
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch searchUsers action on valid input', () => {
    component.searchForm.controls['query'].setValue('valid query');
    component.onSearch(); 

    expect(dispatchSpy).toHaveBeenCalledWith(searchUsers({ searchObj: { searchText: 'valid query', page: '1', perPage: '10' } }));
  });

  it('should not dispatch searchUsers action on empty input', () => {
    component.searchForm.controls['query'].setValue('');
    component.onSearch();  

    expect(dispatchSpy).not.toHaveBeenCalled();
  });

  it('should disable the search button when the form is invalid', () => {
    component.searchForm.controls['query'].setValue('');
    fixture.detectChanges();  
    
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });

  it('should enable the search button when the form is valid', () => {
    component.searchForm.controls['query'].setValue('valid query');
    fixture.detectChanges();  

    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalse();
  });
});
