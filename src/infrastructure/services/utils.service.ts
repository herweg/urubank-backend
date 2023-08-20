import * as fs from 'fs';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
import { pngToJpeg } from 'png-to-jpeg';
import { Injectable } from '@nestjs/common';
import { IUtilsService } from '../../domain/interfaces';

/**
 * UtilsService for many operations
 *
 * @export
 * @class UtilsService
 * @implements {IUtilsService}
 */
@Injectable()
export class UtilsService implements IUtilsService {
  saveImage(mimeType: string, data: string): Observable<string> {
    const type = mimeType.replace('image/', '');
    const buff = Buffer.from(data, 'base64');
    const dir = './assets/images/';
    const name = uuid() + '.jpg';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir);
    }
    if (type == 'png')
      pngToJpeg({ quality: 80 })(buff).then((output: Buffer) =>
        fs.writeFileSync(dir + name, output),
      );
    if (type == 'jpg' || 'jpeg') fs.writeFileSync(dir + name, buff);
    return of(name);
  }
}
