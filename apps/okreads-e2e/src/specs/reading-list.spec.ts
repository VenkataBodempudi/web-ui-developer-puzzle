import { $, browser, ExpectedConditions, $$, by } from 'protractor';

describe('When: I use the reading list feature', () => {
  it('Then: I should see my reading list', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
  });
});


describe('When: I use the want to read to see the snack bar', () => {
  it('Then: I should see snackbar', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    await $('input[type="search"]').sendKeys('angularJS');
    await form.submit();
    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
    await $('[data-testing="want-to-read-button"]').click();
    await browser.wait(
      ExpectedConditions.presenceOf($('.mat-simple-snackbar'))
    );
  });
});

describe('When: I use the remove feature list feature and undo the remove on snackbar', () => {
  it('Then: I should see snackbar and undo', async () => {


    await $('[data-testing="toggle-reading-list"]').click();
    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
    const readinglistItem = await $$('[data-testing="reading-listitem"]');
    expect(readinglistItem.length).toEqual(1);
    await $('[data-testing="remove-book-from-list"]').click();
    const undoAction = await browser.driver.findElement(by.css('.mat-simple-snackbar-action'));
    await undoAction.click();
  });
});



