import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CategoriesPage } from '../categories/categories';
import { QuizProvider } from '../../providers/quiz/quiz';


@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {
  title: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private quizProvider: QuizProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
    this.title = this.quizProvider.grandTotal;

    console.log('From Score = ', this.quizProvider.grandTotal);
    
  }
  getCategories() {
    this.navCtrl.push(CategoriesPage);
     this.quizProvider.newScore();
  
  }

}
