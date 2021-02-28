import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  doSearch(value: string) {
    console.log(`value=${value}`);

    //we gonna call this route { path: 'search/:keyword', component: ProductListComponent }, being the keyword, the value that we get here
    //we append the value to url and route the data to our "search" route. it wll be handled by the ProductListComponent
    //to reuse the logic and view for listing products
    this.router.navigateByUrl(`/search/${value}`);
  }
}
