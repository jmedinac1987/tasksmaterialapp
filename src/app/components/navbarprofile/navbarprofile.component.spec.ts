
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarprofileComponent } from './navbarprofile.component';

describe('NavbarprofileComponent', () => {
  let component: NavbarprofileComponent;
  let fixture: ComponentFixture<NavbarprofileComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavbarprofileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
