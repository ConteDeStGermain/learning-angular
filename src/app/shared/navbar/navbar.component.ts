import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  menuItems = [
    { title: 'Profile', url: '/profile' },
    { title: 'Settings', url: '/settings' },
    { title: 'Log Out', url: '/logout' }
  ]
  
  showDropdown = false;
  selectedItem: String = 'home';

  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }

  selectItem(item: String): void {
    this.selectedItem = item;
    console.log('Selected Item:', this.selectedItem);
    this.showDropdown = false; // Optionally hide the dropdown after selection
  }
}
