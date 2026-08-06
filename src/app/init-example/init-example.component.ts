import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'app-init-example',
    templateUrl: './init-example.component.html',
    styleUrls: ['./init-example.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class InitExampleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
