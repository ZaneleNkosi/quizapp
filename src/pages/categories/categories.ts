import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SciencePage } from '../science/science';
import { QuestionsModel } from '../../model/questions/questions';
import { QuizProvider } from '../../providers/quiz/quiz';

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {
  questions = [
    {
      category: 'Science',
      questions: [
        {
          question: 'Which of the folowing is Iron?',
          options: [
            { option: 'Fe' },
            { option: 'NaCl' },
            { option: 'H20' },
            { option: 'Ir' }
          ]
        },
        {
          question: 'Who invented the light bulb?',
          options: [
            { option: 'Nelson Mandela' },
            { option: 'Tony Stark' },
            { option: 'Thomas Edison' },
            { option: 'Steven Strange' }
          ]
        },

        {
          question: 'What is the formula for Benzene?',
          options: [
            { option: 'C6H6' },
            { option: 'H2O' },
            { option: 'CH4' },
            { option: 'NaCl' }
          ]
        },
        {
          question: 'How many gases are in the atmosphere?',
          options: [
            { option: '12' },
            { option: '0' },
            { option: '4' },
            { option: '8' }
          ]
        },

        {
          question: 'What is the temperature of ice?',
          options: [
            { option: '12 degrees' },
            { option: '-4 degrees' },
            { option: '0 degrees' },
            { option: '1 degree' }
          ]
        },

      ]
    },
    {
      category: 'Technology',
      questions: [
        {
          question: 'Who is the founder of Amazon?',
          options: [
            { option: 'Nelson Mandela' },
            { option: 'Jeff Bezos' },
            { option: 'Steven Strange' },
            { option: 'Tony Stark' }
          ]
        },

        {
          question: 'What does 4IR stand for?',
          options: [
            { option: 'Fourth Industrial Revolution' },
            { option: 'Four Innocent Rats' },
            { option: 'Fourth Industry revolt' },
            { option: 'Fifth Industrial Revolution ' }
          ]
        },

        {
          question: 'What does HTML stand for?',
          options: [
            { option: 'How To Make Lunch' },
            { option: 'Hyper Text Make-up Language' },
            { option: 'Have To Make Lunch' },
            { option: 'Hyper Text Mark-Up Language' }
          ]
        },

        {
          question: 'How many bits are in one byte?',
          options: [
            { option: '12 bits' },
            { option: '8 bits' },
            { option: '4 bits' },
            { option: '0 bits' },
          ]
        },

        {
          question: 'Which is not a programming language?',
          options: [
            { option: 'CSS' },
            { option: 'Python' },
            { option: 'Delphi' },
            { option: 'C#' },
          ]
        },

      ]
    },
    {
      category: 'Animals',
      questions: [
        {
          question: 'Which of the following is biggest land animal?',
          options: [
            { option: 'Elephant' },
            { option: 'Liger' },
            { option: 'Grizzly Bear' },
            { option: 'Whale' }
          ]
        },

        {
          question: 'Where can you find the Kangaroo?',
          options: [
            { option: 'South Africa' },
            { option: 'Australia' },
            { option: 'Namibia' },
            { option: 'USA' }
          ]
        },

        {
          question: 'Which is the worlds most poisonous snake?',
          options: [
            { option: 'Yes' },
            { option: 'No' },
            { option: 'Who cares?' },
            { option: 'Maybe' }
          ]
        },

        {
          question: 'Do cats have nine lives?',
          options: [
            { option: 'King Cobra' },
            { option: 'Inland Taipan' },
            { option: 'Black Mamba' },
            { option: 'Anaconda' }
          ]
        },

        {
          question: 'Which is the fastest animal?',
          options: [
            { option: 'Cheetah' },
            { option: 'Tiger' },
            { option: 'Peregrine Falcon' },
            { option: 'Black Panther ' }
          ]
        },



      ]
    },
    {
      category: 'Countries',
      questions: [
        {
          question: 'Which country is also known as "The Land of Milk and Honey"?',
          options: [
            { option: 'Namibia' },
            { option: 'Brazil' },
            { option: 'Switzerland' },
            { option: 'Ireland' }
          ]
        },

        {
          question: 'Which country has the most people?',
          options: [
            { option: 'USA' },
            { option: 'South Africa' },
            { option: 'India' },
            { option: 'China' },
          ]
        },

        {
          question: 'Which country hosted the 2010 FIFA world cup?',
          options: [
            { option: 'South Africa' },
            { option: 'Brazil' },
            { option: 'France' },
            { option: 'Germany' },
          ]
        },

        {
          question: 'In which country is Table Mountain?',
          options: [
            { option: 'Botswana' },
            { option: 'South Africa' },
            { option: 'Lesotho' },
            { option: 'Zimbabwe' },
          ]
        },
        {
          question: 'In which country would you find the Sphynx?',
          options: [
            { option: 'USA' },
            { option: 'India' },
            { option: 'Britain' },
            { option: 'Egypt' },
          ]
        },

      ]
    },
    {
      category: 'Movies',
      questions: [
        {
          question: 'Which character does Robert Downey Junior Play in the Avengers Franchise??',
          options: [
            { option: 'Thor' },
            { option: 'Hulk' },
            { option: 'Iron Man' },
            { option: 'Captain America' }
          ]
        },

        {
          question: 'Which is the most recent Avengers Movie?',
          options: [
            { option: 'The Avengers' },
            { option: 'Age of Ultron' },
            { option: 'Infinity War' },
            { option: 'Endgame ' }
          ]
        },

        {
          question: 'Which movie has tall blue people called the Na`vi?',
          options: [
            { option: 'Avatar' },
            { option: 'The smurfs.' },
            { option: 'Hansel and Gretel' },
            { option: 'The Avengers' }
          ]
        },

        {
          question: 'In which movie will you find James Halliday?',
          options: [
            { option: 'Harry Potter' },
            { option: 'Ready Player One' },
            { option: 'The Lion King' },
            { option: 'The Shining' },
          ]
        },

        {
          question: 'What kind of animals are Shenzi, Banzai and Ed from the Lion King?',
          options: [
            { option: 'Lions' },
            { option: 'Warthogs' },
            { option: 'Hyenas' },
            { option: 'Meerkats' },
          ]
        },


      ]
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams, private dataStore: QuizProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoriesPage');
  }

  getScience(Qcategory, Questions) {
    this.dataStore.dataStore = Questions;
    this.navCtrl.push(SciencePage, Qcategory);
  }

}
