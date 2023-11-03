import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEcommerceComponent } from './navbar-ecommerce.component';

describe('NavbarEcommerceComponent', () => {
  let component: NavbarEcommerceComponent;
  let fixture: ComponentFixture<NavbarEcommerceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarEcommerceComponent]
    });
    fixture = TestBed.createComponent(NavbarEcommerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
