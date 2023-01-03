import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentforserviceComponent } from './componentforservice.component';

describe('ComponentforserviceComponent', () => {
  let component: ComponentforserviceComponent;
  let fixture: ComponentFixture<ComponentforserviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentforserviceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentforserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
