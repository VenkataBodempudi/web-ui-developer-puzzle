import { MatSnackBar } from '@angular/material/snack-bar';
import { Component, Output, EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { getReadingList, removeFromReadingList,markAsFinished, undoMarkAsFinished } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';
import { take } from 'rxjs/operators';
@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);


  constructor(private readonly store: Store, private snackBar: MatSnackBar) {}

  removeFromReadingList(item: ReadingListItem) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  markBookAsFinished(item: ReadingListItem) {

    this.store.dispatch(markAsFinished({ item }));

  }
}
