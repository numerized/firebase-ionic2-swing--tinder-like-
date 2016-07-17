import {Page} from 'ionic-angular';
import {Component} from '@angular/core';

/** Nested Component */ 
import { SwingContainer } from '../../components/swing-container';

@Page({
  directives: [SwingContainer],
  templateUrl: 'build/pages/page1/page1.html',
})
export class Page1 {

  constructor() {

  }
}
