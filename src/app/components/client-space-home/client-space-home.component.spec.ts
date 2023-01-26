import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpaceHomeComponent } from './client-space-home.component';

describe('ClientSpaceHomeComponent', () => {
  let component: ClientSpaceHomeComponent;
  let fixture: ComponentFixture<ClientSpaceHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSpaceHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSpaceHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
