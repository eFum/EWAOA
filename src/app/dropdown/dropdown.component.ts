import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToProject(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const project = selectElement.value;
    if (project) {
      this.router.navigate([project]);
    }
  }



  ngOnInit(): void {
  }

}
