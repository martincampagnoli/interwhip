import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PlaceholderModel } from '../models/PlaceholderModel';

/**
 * Service for fetching data from the external API.
 */
@Injectable({
  providedIn: 'root',
})
export class DataService {
  private httpClient = inject(HttpClient);

  readonly url = 'https://jsonplaceholder.typicode.com/posts';

  /**
   * Get data from the API.
   *
   * @returns An observable containing an array of data results.
   */
  getData(): Observable<PlaceholderModel[]> {
    return this.httpClient.get<PlaceholderModel[]>(this.url);
  }
}
