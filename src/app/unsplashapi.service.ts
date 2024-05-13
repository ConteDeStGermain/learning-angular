import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class UnsplashapiService {

  constructor() { }

  getRandomThaiPortrait(uniqueParam: number) {
    const url = `https://source.unsplash.com/random/?thailand&orientation=portrait&sig=${uniqueParam}`;
    // (responseType is a String instead of a blob)
    return axios.get(url, { responseType: 'blob' })
    // @ts-ignore
      .then(response => URL.createObjectURL(response.data))
      .catch(error => console.error('Error:', error));
  }

}
