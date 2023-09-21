import { Observable } from 'rxjs';

export interface IUtilsService {
  saveImage(mimeType: string, data: string): Observable<string>;
}
