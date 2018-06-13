import { Student } from './student';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class StudentsService {

  constructor(private http: HttpClient) { }

    getStudents(): Observable<Student[]> {
      return this.http.get<Student[]>('./assets/students.json');
    }
}
