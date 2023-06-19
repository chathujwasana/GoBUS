import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MainwelcomePage } from './mainwelcome.page';

describe('MainwelcomePage', () => {
  let component: MainwelcomePage;
  let fixture: ComponentFixture<MainwelcomePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MainwelcomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
