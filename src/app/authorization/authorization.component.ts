import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'sp-authorization',
  templateUrl: 'authorization.component.html',
  styleUrls: ['authorization.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthorizationComponent {}
