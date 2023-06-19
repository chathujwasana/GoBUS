import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HelpregisterPage } from './helpregister.page';

describe('HelpregisterPage', () => {
  let component: HelpregisterPage;
  let fixture: ComponentFixture<HelpregisterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HelpregisterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
