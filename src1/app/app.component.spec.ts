import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';

let component: AppComponent;
let h1: HTMLElement;


describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  

  it('It should display title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    console.log('component',component);

    h1 = fixture.nativeElement.querySelector('span');
    console.log('h1',h1);

    
    expect(h1.textContent).toContain(component.title);

  });

  it('no title in the DOM after createComponent()', () => {
    const fixture = TestBed.createComponent(AppComponent);
    h1 = fixture.nativeElement.querySelector('span');


    expect(h1.textContent).toEqual('unitTesting');
  });

  it(`should have as title 'unitTesting'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('unitTesting');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unitTesting app is running!');


    
  });


  
  it('should render title subodh', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain('unitTesting app is running!');


    
  });
});
