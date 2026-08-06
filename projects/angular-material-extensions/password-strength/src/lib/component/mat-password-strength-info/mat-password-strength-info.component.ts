import {Component, Input, OnInit, ChangeDetectionStrategy, TemplateRef} from '@angular/core';
import {MatPasswordStrengthComponent} from '../mat-password-strength/mat-password-strength.component';

@Component({
    selector: 'mat-password-strength-info',
    exportAs: 'matPasswordStrengthInfo',
    templateUrl: './mat-password-strength-info.component.html',
    styleUrls: ['./mat-password-strength-info.component.scss'],
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false
})
export class MatPasswordStrengthInfoComponent implements OnInit {

  @Input()
  passwordComponent: MatPasswordStrengthComponent;

  @Input()
  enableScoreInfo = false;

  @Input()
  lowerCaseCriteriaMsg = 'contains at least one lower character';

  @Input()
  upperCaseCriteriaMsg = 'contains at least one upper character';

  @Input()
  digitsCriteriaMsg = 'contains at least one digit character';

  @Input()
  specialCharsCriteriaMsg = 'contains at least one special character';

  @Input()
  customCharsCriteriaMsg = 'contains at least one custom character';

  @Input()
  minCharsCriteriaMsg: string;

  @Input()
  matIconDone = 'done';

  @Input()
  matIconError = 'error';

  @Input()
  iconDoneTemplate: TemplateRef<unknown>;

  @Input()
  iconErrorTemplate: TemplateRef<unknown>;

  ngOnInit(): void {
    if (!this.minCharsCriteriaMsg) {
      this.minCharsCriteriaMsg = `contains at least ${this.passwordComponent.min} characters`
    }
  }

}
