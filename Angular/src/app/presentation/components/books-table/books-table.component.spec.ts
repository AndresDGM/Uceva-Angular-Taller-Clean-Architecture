import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { BOOKS_MOCK } from '../../../mocks/books.mocks';
import { BooksTableComponent } from './books-table.component';

describe('BooksTableComponent', () => {
  let component: BooksTableComponent;
  let fixture: ComponentFixture<BooksTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BooksTableComponent] }).compileComponents();
    fixture = TestBed.createComponent(BooksTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar los 12 atributos del modelo', () => {
    component.books = BOOKS_MOCK;
    fixture.detectChanges();

    const columns = fixture.debugElement.query(By.css('tbody tr')).queryAll(By.css('th, td'));
    expect(columns.length).toBe(12);
    expect(columns[0].nativeElement.textContent.trim()).toBe('1');
    expect(columns[2].nativeElement.textContent.trim()).toBe(BOOKS_MOCK[0].title);
    expect(columns[10].nativeElement.textContent.trim()).toBe(BOOKS_MOCK[0].genre);
  });
});
