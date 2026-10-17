import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Book } from '../../../core/domain/models/book.model';

@Component({
  selector: 'app-books-table',
  templateUrl: './books-table.component.html',
  imports: [CommonModule],
})
export class BooksTableComponent {
  @Input() books: Book[] = [];
}
