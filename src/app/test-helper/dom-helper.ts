import { ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

export class DomHelper<T> {
  private fixture: ComponentFixture<T>;

  constructor(fixture: ComponentFixture<T>) {
    this.fixture = fixture;
  }

  getText(selector: string): string {
    const el = this.fixture.debugElement.query(By.css(selector));

    if ( !el ) {
      return null;
    }

    return el.nativeElement.textContent;
  }

  count(selector: string, text?: string): number {
    const el = this.fixture.debugElement.queryAll(By.css(selector));

    if ( !text ) {
      return el.length;
    }

    return el.filter(e => e.nativeElement.textContent === text).length;
  }

}
