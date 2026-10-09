import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'app-example',
    templateUrl: './examples.component.html',
    styleUrls: ['./examples.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class ExamplesComponent implements OnInit {

  pattern = new RegExp(/^(?=.*?[äöüÄÖÜß])/);

  constructor() {
  }

  ngOnInit() {
  }

  onStrengthChanged(strength: number) {
    console.log('password strength = ', strength);
  }

}
