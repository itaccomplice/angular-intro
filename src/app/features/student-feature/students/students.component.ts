import { Student } from '../../../service/student';
import { StudentsService } from '../../../service/students.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  students: Student[];

  constructor(private studentsService: StudentsService) {
    this.studentsService.getStudents().subscribe(
      students => this.students = students
    );
  }

  ngOnInit() {
  }
}
