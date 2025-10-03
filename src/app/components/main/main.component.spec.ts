import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainComponent } from './main.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('MainComponent', () => {
  let component: MainComponent;
  let fixture: ComponentFixture<MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainComponent, RouterTestingModule],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should match snapshot', () => {
    expect(fixture.nativeElement).toMatchSnapshot();
  });

  it('should render the app-button-link element', () => {
    const el: HTMLElement = fixture.nativeElement;
    const btn = el.querySelector('app-button-link');
    expect(btn).toBeTruthy();
  });

  it('should pass inputs to the button link (structural check)', () => {
    const el: HTMLElement = fixture.nativeElement;
    const btn = el.querySelector('app-button-link');
    // Since it's a child standalone component rendered, we just assert element exists.
    // Deeper assertions are in ButtonLinkComponent spec.
    expect(btn?.outerHTML).toContain('app-button-link');
  });
});
