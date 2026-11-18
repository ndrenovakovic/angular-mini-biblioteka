import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Book {
  id: number;
  title: string;
  author: string;
  genre: string;
  read: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = '';
  author = '';
  genre = 'Roman';
  searchText = '';

  books: Book[] = this.loadBooks();

  get filteredBooks(): Book[] {
    const text = this.searchText.toLowerCase().trim();

    if (!text) {
      return this.books;
    }

    return this.books.filter(book =>
      book.title.toLowerCase().includes(text) ||
      book.author.toLowerCase().includes(text)
    );
  }

  addBook(): void {
    if (!this.title.trim() || !this.author.trim()) {
      return;
    }

    const newBook: Book = {
      id: Date.now(),
      title: this.title.trim(),
      author: this.author.trim(),
      genre: this.genre,
      read: false
    };

    this.books.push(newBook);
    this.saveBooks();
    this.clearForm();
  }

  toggleRead(book: Book): void {
    book.read = !book.read;
    this.saveBooks();
  }

  deleteBook(id: number): void {
    this.books = this.books.filter(book => book.id !== id);
    this.saveBooks();
  }

  private clearForm(): void {
    this.title = '';
    this.author = '';
    this.genre = 'Roman';
  }

  private saveBooks(): void {
    localStorage.setItem('miniLibraryBooks', JSON.stringify(this.books));
  }

  private loadBooks(): Book[] {
    const saved = localStorage.getItem('miniLibraryBooks');

    if (saved) {
      return JSON.parse(saved) as Book[];
    }

    return [
      {
        id: 1,
        title: 'Na Drini ćuprija',
        author: 'Ivo Andrić',
        genre: 'Roman',
        read: true
      },
      {
        id: 2,
        title: 'Mali princ',
        author: 'Antoan de Sent Egziperi',
        genre: 'Roman',
        read: false
      }
    ];
  }
}
