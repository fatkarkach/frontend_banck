import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpaceHistoryComponent } from './client-space-history.component';

describe('ClientSpaceHistoryComponent', () => {
  let component: ClientSpaceHistoryComponent;
  let fixture: ComponentFixture<ClientSpaceHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSpaceHistoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSpaceHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
