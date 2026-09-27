import { TestBed } from '@angular/core/testing';
import { Title } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
      providers: [provideRouter([])],
    }).compileComponents();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('nav span')?.textContent).toContain('Angular Biome Demo');
  });

  it('should set the document title', () => {
    TestBed.createComponent(App);

    expect(TestBed.inject(Title).getTitle()).toBe('Angular Biome Demo');
  });
});
