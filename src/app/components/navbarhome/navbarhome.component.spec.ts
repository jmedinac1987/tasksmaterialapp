
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NavbarhomeComponent } from './navbarhome.component';

describe('NavbarhomeComponent', () => {
  let component: NavbarhomeComponent;
  let fixture: ComponentFixture<NavbarhomeComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      imports: [MatSidenavModule],
      declarations: [NavbarhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
