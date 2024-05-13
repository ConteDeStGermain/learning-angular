import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UnsplashapiService } from '../../unsplashapi.service';

@Component({
  selector: 'app-cardscarousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cardscarousel.component.html',
  styleUrls: ['./cardscarousel.component.scss']
})
export class CardscarouselComponent {
  images: (string | null | void)[] = [null, null, null];
  transformations: string[] = ['translateY(-30px)', 'translateY(40px)', 'translateY(90px)'];

  constructor(private apiService: UnsplashapiService) {}

  ngOnInit() {
    this.fetchImage();
    this.fetchImage();
    this.fetchImage();
  }

  fetchImage() {
    // Unique parameter to ensure different images
    const uniqueParam = new Date().getTime();
    this.apiService.getRandomThaiPortrait(uniqueParam).then(url => {
      const emptyIndex = this.images.findIndex(image => image === null);
      if (emptyIndex !== -1) {
        this.images[emptyIndex] = url;
      }
    }).catch(error => {
      console.error('Error fetching image', error);
    });
  }

  shiftCarousel() {
    // Apply a timeout to give the transition a chance to run
    setTimeout(() => {
      this.images = [this.images[1], this.images[2], null];
      this.fetchImage();
    }, 0);
  }

  getTransform(index: number): string {
    return this.transformations[index];
  }


}
