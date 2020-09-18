Code Smells and Improvments :

Items:
1. In few places Selectors are being subcribed and are not being unsubscribe, its good to unsubcribe, Used asyc pipe to unsubsribe the store.
Assigned store value to books$ and used the books$ in template with async.
2. Type was not defined for  item in  readinglistcomponent.ts, assigned the ReadingListItem interface to the item.
Added corresponding interface ReadingListItem to the item.
3. we could improve accessability and unit test cases are not written fully.

Accessibility Issues: 
Lighthouse:
1. Names and labels - Buttons do not have an accessible name
     Failing Elements: button.mat-focus-indicator.mat-icon-button.mat-button-base.ng-tns-c71-1.
  Added aria-label to search button.
2. ‘Contrast’- Background and foreground colors do not have a sufficient contrast ratio.
     Failing Elements: span.mat-button-wrapper
  Changed of the button to background-color: $pink-very-dark; to address the issue.
  Updated the color of the text of empty search example text. 

Manually check for accessibility:
1. Updated area-label for search button. 
2. added the alt attributes for images.
3. updated the area-label attribute for want to read button.

Test Cases: 
On Running npm run test got two issues in one spec file.
Fixed it by adding actions the reducer reading-list-reducer.ts
