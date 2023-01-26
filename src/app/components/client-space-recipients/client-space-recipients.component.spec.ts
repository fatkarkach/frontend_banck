import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientSpaceRecipientsComponent } from './client-space-recipients.component';

describe('ClientSpaceRecipientsComponent', () => {
  let component: ClientSpaceRecipientsComponent;
  let fixture: ComponentFixture<ClientSpaceRecipientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientSpaceRecipientsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientSpaceRecipientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
