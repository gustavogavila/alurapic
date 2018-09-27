import { Injectable } from '../../../../node_modules/@angular/core';
import { HttpClient } from '../../../../node_modules/@angular/common/http';

import { Photo } from './photo';


const API = 'http://localhost:3000';

@Injectable({providedIn: 'root'})
export class PhotoService {

    constructor(private http: HttpClient) {
    }

    listFromUser(userName: string) {
        return this.http
            .get<Photo[]>(`${API}/${userName}/photos`);
    }
}