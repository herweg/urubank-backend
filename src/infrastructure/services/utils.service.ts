import * as fs from 'fs';
import sharp from 'sharp';
import { Observable, of } from 'rxjs';
import { v4 as uuid } from 'uuid';
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
    if (type == 'png') {
      sharp(buff)
        .jpeg({ quality: 80 })
        .resize(1280, 720, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toBuffer()
        .then((output) => fs.writeFileSync(dir + name, output));
    }
    if (type == 'jpg' || 'jpeg') {
      sharp(buff)
        .resize(1280, 720, {
          fit: sharp.fit.inside,
          withoutEnlargement: true,
        })
        .toBuffer()
        .then((output) => fs.writeFileSync(dir + name, output));
    }
    return of(name);
  }
}
