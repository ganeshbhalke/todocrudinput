import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetConfiremComponent } from './get-confirem.component';

describe('GetConfiremComponent', () => {
  let component: GetConfiremComponent;
  let fixture: ComponentFixture<GetConfiremComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetConfiremComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetConfiremComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
