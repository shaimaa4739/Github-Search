# GithubSearchApp
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.11.
An intuitive platform for searching users and displaying their profile details and repositries.
This project is a frontend application that allows users to search for profiles using a responsive UI. 

## Development server
Run 'npm install'
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Running unit tests
Run `ng test` to execute the unit tests.

## Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

- ## Features

### User Experience Features:
- **Search Bar**: A reusable search bar component for querying user profiles.
- **Pagination**: Allows users to navigate through results.
- **Sorting**: Users can sort results by name.
- **Profile Navigation**: Navigate to a detailed view of a selected user's profile and repositries.
- **Feedback**: Toast notifications for system feedback and a loader for search requests "ngx-toaster".
- **loader**: is displayed during search requests

### Technical Features:
- **State Management**: Implements state management using NgRx for search functionality.
- **Test cases**: Implements test cases for search functionality.
- **Angular Material**: Utilizes Angular Material for pagination and icons.
- **Responsive Design**: Designed to work seamlessly across devices "boostrap".
- **Interceptors**: Centralized request handling for consistent behavior across endpoints "Toast notifications".
- **RXJS** Endpoints, Behviour subject
- **Clean project structure**
- **Standalone components**

# Enhancement
- Loader will be displayed with each end point request using "interceptors" not for only user list search
- Test cases for user profile page
- Design enhancment
- Make repos list as a reusable component
- Apply lazy loading
- Pagination enhancment
- Continue page not found design
- Make pagination functionality as directive "if applicable"

# test cases
1- Component Creation
  Ensures that the component is instantiated successfully.
  Result: ✅ Passed
  it('should create', () => {
    expect(component).toBeTruthy();
  });

2- Dispatch Action on Valid Input
  Verifies that the searchUsers action is dispatched when a valid input is provided.
  Result: ✅ Passed
  it('should dispatch searchUsers action on valid input', () => {
    component.searchForm.controls['query'].setValue('valid query');
    component.onSearch(); 
    expect(dispatchSpy).toHaveBeenCalledWith(searchUsers({ searchObj: { searchText: 'valid query', page: '1', perPage: '10' } }));
  });

3- No Action on Empty Input
  Ensures that the searchUsers action is not dispatched when the input is empty.
  Result: ✅ Passed
  it('should not dispatch searchUsers action on empty input', () => {
    component.searchForm.controls['query'].setValue('');
    component.onSearch();  
    expect(dispatchSpy).not.toHaveBeenCalled();
  });

4- Disable Search Button for Invalid Input
  Confirms that the search button is disabled when the form is invalid (empty input).
  Result: ✅ Passed
  it('should disable the search button when the form is invalid', () => {
    component.searchForm.controls['query'].setValue('');
    fixture.detectChanges();  
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeTrue();
  });

5- Enable Search Button for Valid Input
  Ensures that the search button is enabled when the form is valid (valid input).
  Result: ✅ Passed
  it('should enable the search button when the form is valid', () => {
    component.searchForm.controls['query'].setValue('valid query');
    fixture.detectChanges();  
    const button = fixture.nativeElement.querySelector('button');
    expect(button.disabled).toBeFalse();
  });



