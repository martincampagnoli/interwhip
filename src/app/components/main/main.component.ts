import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ButtonLinkComponent } from '../button-link/button-link.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ButtonLinkComponent],
})
export class MainComponent {}
