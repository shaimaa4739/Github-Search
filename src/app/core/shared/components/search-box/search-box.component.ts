import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { searchUsers } from '../../../features/search/store/searchusers.actions';
import { SearchObj } from '../../../models/search-obj';
import { SHARED_IMPORTS } from '../../shared-imports';

@Component({
  selector: 'app-search-box',
  standalone: true,
  imports: [...SHARED_IMPORTS],
  templateUrl: './search-box.component.html',
  styleUrl: './search-box.component.scss'
})
export class SearchBoxComponent {

  searchForm: FormGroup;
  searchObj: SearchObj = { searchText: 's', page: '1', perPage: '10' };
  page: number = 1;
  perPage: number = 10;

  constructor(private fb: FormBuilder, private store: Store) {
    this.searchForm = this.fb.group({
      query: ['', [Validators.required]],
    });
  }

  ngOnInit(){
    this.searchObj?this.store.dispatch(searchUsers({ 
      searchObj:{
      searchText:'s',
      page:'1',
      perPage:'10',
    } })): null;
  }

  onSearch() {
    if(this.searchForm.valid){
      const searchText = this.searchForm.get('query')?.value || 's';

      this.searchObj = {
        searchText,
        page:this.page.toString() || '1',
        perPage: this.perPage.toString() ||'10',
      };
      
      this.searchObj?this.store.dispatch(searchUsers({ searchObj: this.searchObj })): null;
    }
  }

  onPageChange(page: number) {
    this.page = page;
    this.onSearch();
  }

  onPerPageChange(perPage: number) {
    this.perPage = perPage;
    this.onSearch();
  }
}
