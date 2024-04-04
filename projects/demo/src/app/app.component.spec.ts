import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { By } from '@angular/platform-browser';

// Test
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [provideRouter(routes)],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    // component = new AppComponent();
    fixture.detectChanges();
  });

  it('should create the app', () => {
    // Since this is in all tests, we can pass it in the beforeEach so we don't repeat our selfs
    // const fixture = TestBed.createComponent(AppComponent);
    // const app = fixture.componentInstance;

    expect(component).toBeTruthy();
  });

  it(`should have the properties values...`, () => {
    expect(component.title).toContain('Angular');
    expect(component.brand).toContain('Aldana');
  });

  it('should render title...', () => {
    // const element = fixture.nativeElement as HTMLElement;
    // expect(element.querySelector('h1')?.textContent).toContain('Angular');

    const debugElementH1 = fixture.debugElement.query(By.css('h1'));
    expect(debugElementH1.nativeElement.textContent).toContain('Angular');
  });
});
