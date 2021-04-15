import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { QuizService } from 'src/app/services/quiz.service';

import {Quiz} from './../../model/quiz';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  totalAnswered: number = 0;
  correctAnswer: number = 0;

  showResult:boolean = false;

  quiz:Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.quizService.getQuizData().subscribe(data => {
      this.quiz = data;
      console.log(this.quiz);
    })
  }

  submitQuiz(){
    this.totalAnswered = 0;
    this.correctAnswer = 0;
    for(let i = 0; i < this.quiz.length; i++){
      if("selected" in this.quiz[i] && (this.quiz[i]["selected"] != null)){
        this.totalAnswered++;
      }
      if(this.quiz[i]["selected"] === this.quiz[i]["answer"]){
        this.correctAnswer++;
      }
    }
    this.showResult = true;
  }

}
