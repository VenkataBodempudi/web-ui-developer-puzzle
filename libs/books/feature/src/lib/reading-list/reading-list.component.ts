import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList, undoActionRemoveReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  constructor(private readonly store: Store, private snackBar: MatSnackBar) {}

  addSnackbar(book) {
    const snackBarRef = this.snackBar.open(
      `${book.title} Book has been Removed from the Reading List!`,
      'Undo',
      {
        duration: 3000
      }
    )
    snackBarRef.onAction().subscribe(
      () =>
      this.store.dispatch(undoActionRemoveReadingList({ book }))
    )
}
  removeFromReadingList(item: ReadingListItem) {
    this.store.dispatch(removeFromReadingList({ item }));
    this.addSnackbar(item);
  }
}
