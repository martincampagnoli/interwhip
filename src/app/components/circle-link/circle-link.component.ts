import {
  ChangeDetectionStrategy,
  Component,
  input,
  Input,
} from '@angular/core';

/**
 * Component representing a circular link with an image and title.
 */
@Component({
  selector: 'app-circle-link',
  templateUrl: './circle-link.component.html',
  styleUrls: ['./circle-link.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
})
export class CircleLinkComponent {
  /**
   * The title of the circular link.
   */
  readonly title = input.required<string>();

  /**
   * The URL link associated with the circular link.
   */
  readonly link = input.required<string>();

  /**
   * The URL of the image to be displayed within the circular link.
   */
  readonly img = input.required<string>();

  /**
   * Constructs the CircleLinkComponent.
   */
  constructor() {}
}
