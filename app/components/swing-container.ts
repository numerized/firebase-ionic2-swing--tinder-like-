import {Component, ViewChild, ViewChildren, QueryList} from '@angular/core';

import {
  Stack,
  Card,
  ThrowEvent,
  DragEvent,
  SwingStackComponent,
  SwingCardComponent} from 'angular2-swing';


@Component({
  selector: 'swing-container',
  directives: [SwingStackComponent, SwingCardComponent],
  template: `
    <div id="viewport">
      <ul class="stack" swing-stack #myswing1 (throwout)="onThrowOut($event)">
        <li swing-card #mycards1 [ngClass]="c.name" *ngFor="let c of cards">
        <img src="{{c.svg}}">
        <h2>{{c.name}}</h2>
        <p>{{c.card_short_description}}</p></li>
      </ul>
    </div>
  `
})

export class SwingContainer {    
    @ViewChild('myswing1') swingStack: SwingStackComponent;
    @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

    cards: Array<any>;
    
    constructor() {

        console.log('in the ctor');

        this.cards = [
        // { name: 'joyful', symbol: '♣', svg:'img/ACTIVE/ACTIVE-joyful.svg' },
        // { name: 'generous', symbol: '♦', svg:'img/ACTIVE/ACTIVE-generous.svg' },
        // { name: 'optimistic', symbol: '♠', svg:'img/ACTIVE/ACTIVE-optimistic.svg' },
        // { name: 'persistent', symbol: '♥', svg:'img/ACTIVE/ACTIVE-persistent.svg' },
        // { name: 'positive', symbol: '☼', svg:'img/ACTIVE/ACTIVE-positive.svg' },
        // { name: 'principled', symbol: '♂', svg:'img/ACTIVE/ACTIVE-principled.svg' },
        // { name: 'reliable', symbol: '♀', svg:'img/ACTIVE/ACTIVE-reliable.svg' },
        // { name: 'appreciative', symbol: '☆', svg:'img/CONNECTED/CONNECTED-appreciative.svg' },
        // { name: 'caring', symbol: '✿', svg:'img/CONNECTED/CONNECTED-caring.svg' },
        // { name: 'committed', symbol: '➷', svg:'img/CONNECTED/CONNECTED-committed.svg' },
        // { name: 'empathique', symbol: '☆', svg:'img/CONNECTED/CONNECTED-empathique.svg' },
        // { name: 'loyal', symbol: '✿', svg:'img/CONNECTED/CONNECTED-loyal.svg' },
        // { name: 'responsible', symbol: '➷', svg:'img/CONNECTED/CONNECTED-responsible.svg' },
        // { name: 'trustworthy', symbol: '➷', svg:'img/CONNECTED/CONNECTED-trustworthy.svg' },
        { name: 'ambitious', symbol: '☆', svg:'img/FLOURISHING/FLOURISHING-ambitious.svg', card_short_description: "I formulate important goals for the future",
				card_long_description : "An ambitious person wants to achieve. An ambitious person has a strong desire for success and will use exceptional effort to achieve their goals." },
        { name: 'creative', symbol: '✿', svg:'img/FLOURISHING/FLOURISHING-creative.svg', card_short_description: "I have lots of new ideas",
				card_long_description : "If you are creative you use your imagination and are good at thinking of new ideas, or creating an inspired piece of work."},
        { name: 'curious', symbol: '➷', svg:'img/FLOURISHING/FLOURISHING-curious.svg', card_short_description: "I like to find out about new things",
				card_long_description : "A curious person has a desire to know more about things, and is eager to learn and explore." },
        { name: 'hard-working', symbol: '☆', svg:'img/FLOURISHING/FLOURISHING-hard-working.svg', card_short_description: "I always try my best",
				card_long_description : "Hardworking people are conscientious, productive and will persevere when carrying out tasks. They will invest time and energy and will always use their best efforts." },
        { name: 'open-minded', symbol: '✿', svg:'img/FLOURISHING/FLOURISHING-open-minded.svg', card_short_description: "I listen to new ideas even if I disagree with them",
				card_long_description : "If you are open minded you are tolerant of others views, and receptive to new ideas and experiences." },
        { name: 'purposeful', symbol: '➷', svg:'img/FLOURISHING/FLOURISHING-purposeful.svg', card_short_description: "I work towards my goals",
				card_long_description : "If you are purposeful, you act with determination to fulfil a meaningful goal." },
        { name: 'self-disciplined', symbol: '➷', svg:'img/FLOURISHING/FLOURISHING-self-disciplined.svg', card_short_description: "I do important things even if I don’t like it",
				card_long_description : "A self-disciplined person has a strong mind and will. If you have self discipline you can make yourself do things you ought to, without someone making you." },
        // { name: 'co-operative', symbol: '☆', svg:'img/SUSTAINABLE/SUSTAINABLE-co-operative.svg',card_short_description: "I am good at working with others in a team",
		// 		card_long_description : "A cooperative person is willing to help and work with others to achieve common goals." },
        // { name: 'enterprising', symbol: '✿', svg:'img/SUSTAINABLE/SUSTAINABLE-enterprising.svg',card_short_description: "I put creative ideas into action",
		// 		card_long_description : "An enterprising person is able to think of new projects or ideas, and puts them into action. For instance if you are enterprising you may be bold, enthusiastic and energetic in initiating a new project, and actively work to make it happen." },
        // { name: 'modest', symbol: '➷', svg:'img/SUSTAINABLE/SUSTAINABLE-modest.svg',card_short_description: "I don’t boast",
		// 		card_long_description : "A modest person will not talk excessively about their abilities or achievements. They can be proud of what they do, but they won’t “rub” their pride in other’s faces!" },
        // { name: 'patient', symbol: '☆', svg:'img/SUSTAINABLE/SUSTAINABLE-patient.svg',card_short_description: "I don’t get annoyed because I have to wait",
		// 		card_long_description : "If you are patient, you are accepting of other’s habits and behaviour, and you are good at putting up with things. You behave calmly." },
        // { name: 'resilient', symbol: '✿', svg:'img/SUSTAINABLE/SUSTAINABLE-resilient.svg',card_short_description: "I recover quickly from setbacks",
		// 		card_long_description : "A resilient person will face whatever life throws at them. If you are resilient you are able to become strong and happy again after a difficult situation.", },
        // { name: 'thrifty', symbol: '➷', svg:'img/SUSTAINABLE/SUSTAINABLE-thrifty.svg',card_short_description: "I use my time and money wisely",
		// 		card_long_description : "If you are not wasteful, and spend your money, effort and other resources wisely and carefully, then you are thrifty." },
        // { name: 'visionary', symbol: '➷', svg:'img/SUSTAINABLE/SUSTAINABLE-visionary.svg',card_short_description: "I’d like to leave the world a better place",
		// 		card_long_description : "Do you have a vision, idea or purpose for the future? A visionary has a clear idea of a future solution to answer a current need, and will imagine how to make it happen." }
        ];
    }

    ngAfterViewInit() {
        // ViewChild & ViewChildren are only available
        // in this function

        //console.log(this.swingStack); // this is the stack
        //console.log(this.swingCards); // this is a list of cards

        // we can get the underlying stack
        // which has methods - createCard, destroyCard, getCard etc
        //console.log(this.swingStack.stack);

        // and the cards
        // every card has methods - destroy, throwIn, throwOut etc
        //this.swingCards.forEach((c) => c.getCard().throwOut(-1,10));
        //this.swingCards.forEach((c) => console.log(c.getCard()));

        // this is how you can manually hook up to the
        // events instead of providing the event method in the template
        // this.swingStack.throwoutleft.subscribe(
        // (event: ThrowEvent) => console.log('Manual hook: ', event));

        // this.swingStack.dragstart.subscribe((event: DragEvent) => console.log(event));
    }

    // This method is called by hooking up the event
    // on the HTML element - see the template above
    onThrowOut(event: ThrowEvent) {
        //console.log('Hook from the template', event.throwDirection);
    }
}