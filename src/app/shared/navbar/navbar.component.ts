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
  
  menuOpen = false;
  selectedItem: String = 'home';

  selectItem(item: String): void {
    this.selectedItem = item;
    console.log('Selected Item:', this.selectedItem);
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    console.log('AAAAA')
  }
}
