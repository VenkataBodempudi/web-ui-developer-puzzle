import { $, browser, ExpectedConditions, $$ } from 'protractor';

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

describe('When: I use the want to read button to add to the readinglist', () => {
  it('Then: I should see book added to readinglist', async () => {
    await browser.get('/');
    await browser.wait(
      ExpectedConditions.textToBePresentInElement($('tmo-root'), 'okreads')
    );

    const form = await $('form');
    const input = await $('input[type="search"]');
    await input.sendKeys('angular');
    await form.submit();
    const items = await $$('[data-testing="book-item"]');
    expect(items.length).toBeGreaterThan(1);
    const bookaList = await $('[data-testing="want-to-read-button"]');
    await bookaList.click();
  });
});


describe('When: I want to click on finish reading and remove the book', () => {
  it('Then: I should finish button clicked and book removed', async () => {
    const readingListToggle = await $('[data-testing="toggle-reading-list"]');
    await readingListToggle.click();

    await browser.wait(
      ExpectedConditions.textToBePresentInElement(
        $('[data-testing="reading-list-container"]'),
        'My Reading List'
      )
    );
    const readinglistItem = await $$('[data-testing="reading-listitem"]');
    expect(readinglistItem.length).toEqual(1);
    const finishedIcon = await $('[data-testing="mark-book-as-finished"]');
    //to check the finished mark
    await finishedIcon.click();
    //to uncheck the finished mark
    await finishedIcon.click();
    const removeCircle = await $('[data-testing="remove-book-from-list"]');
    await removeCircle.click();
  });
});
