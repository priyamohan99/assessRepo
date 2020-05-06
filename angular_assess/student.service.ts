import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private httpc:HttpClient) { }
  public get():Observable<any>
  {
    return this.httpc.get<any>('http://localhost:3000/student');
  }
  public post(value:any):Observable<any>
  {
    return this.httpc.post<any>('http://localhost:3000/student',value);
  }
  public put(value:any, StudentId: any) : Observable<any>
    {
      return this.httpc.put<any>(`http://localhost:3000/student/${StudentId}`,value);
    }
  public delete(StudentId: any) : Observable<any>
  {
    return this.httpc.delete<any>(`http://localhost:3000/student/${StudentId}`);
  }
}
