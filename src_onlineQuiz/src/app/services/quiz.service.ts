import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Quiz} from '../model/quiz'

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  private jsonUrl = 'assets/questions.json';

  constructor(private http: HttpClient) { }

  public getQuizData(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(this.jsonUrl);
  }
}
