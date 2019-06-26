import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, GestureController } from 'ionic-angular';
import { ScorePage } from '../score/score';
import { QuestionsModel } from '../../model/questions/questions';
import { QuizProvider } from '../../providers/quiz/quiz';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-science',
  templateUrl: 'science.html',
})
export class SciencePage {
  @ViewChild('slides') slides: Slides;
  showQuestion = true;
  Q1 = false;
  Q: number = 0;

  category: string;
  title: string;
  Questions: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataS: QuizProvider) {
  }

  ionViewDidLoad() {
    this.title = this.navParams.data;
    this.Questions = this.dataS.dataStore;
  }

  Science = ['Fe', 'Thomas Edison', 'C6H6', '4', '0 degrees'];

  Technology = ['Jeff Bezos', 'Fourth Industrial Revolution', 'Hyper Text Mark-Up Language', '8 bits', 'CSS']

  Animals = ['Elephant', 'Australia', 'Inland Taipan', 'No', 'Peregrine Falcon']

  Countries = ['Switzerland', 'China', 'South Africa', 'South Africa', 'Egypt']

  Movies = ['Iron Man', 'Endgame ', 'Avatar', 'Ready Player One', 'Hyenas']

  invertBtn(value: string, answer: string) {
    this.showQuestion = false;
    this.Q1 = true;
  }

  getScore() {
    this.navCtrl.push(ScorePage);
  }
  next(question, options: [], answer) {

    if (this.slides.isEnd() == false) {
      switch (this.title) {
        case 'Science':
          this.Science.map(res => {
            if (answer == res) {
              this.dataS.setTotal(20);
            } else {
              this.dataS.setTotal(0);
            }

          })
          break;

        case 'Technology':
          this.Technology.map(res => {
            if (answer == res) {
              this.dataS.setTotal(20);
            } else {
              this.dataS.setTotal(0);
            }

          })
          break;

        case 'Animals':
          this.Animals.map(res => {
            if (answer == res) {
              this.dataS.setTotal(20);
            } else {
              this.dataS.setTotal(0);
            }

          })
          break;

        case 'Countries':
          this.Countries.map(res => {
            if (answer == res) {

              this.dataS.setTotal(20);
            } 
            else{
              this.dataS.setTotal(0);
            }
          })
          break;

        case 'Movies':
          this.Movies.map(res => {
            if (answer == res) {
              this.dataS.setTotal(20);
            } else {

              this.dataS.setTotal(0);

            }
          })
          break;

        default:
          break;
      }
    }
  }
  toScore() {
    this.navCtrl.push(ScorePage);
  }
  Next() {
    this.slides.slideNext();
  }

  
}


