import { Component} from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent  {
  studentData: any = '';
  constructor(private studentService : StudentService) { }
public get(){
 this.studentData= this.studentService.get()
}
public post(){
  let details = {
    "StudentId": "1004",
    "StudentName":"Bruce",
    "StudentGrade":"B",
    "Course":"BE",
    "Address":"Kolkatta",
    "Phno":9876543204,
  }
  this.studentService.post(details).subscribe(res => {
    console.log(res);
  });
}
public put(){
  let details = {
    "StudentId": "1004",
    "StudentName":"Banner",
    "StudentGrade":"A",
    "Course":"BE",
    "Address":"Goa",
    "Phno":9876543204,
  }
  let StudentId = 1004;
  this.studentService.put(details,StudentId).subscribe(res => {
    console.log(res);
  });
}
public delete(){
  let StudentId = 1004;
  this.studentService.delete(StudentId).subscribe(res => {
    console.log(res);
  });
}
  

}
