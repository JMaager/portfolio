# portfolio

Personal portfolio site built with HTML, CSS, and vanilla JavaScript.

## Update content quickly

All page content now comes from one object in [scripts/app.js](scripts/app.js):

- `portfolioContent.meta` for hero text and profile image
- `portfolioContent.about` for about cards
- `portfolioContent.projects` for project cards and links
- `portfolioContent.contact` for contact buttons

To add a new project, copy one item in the `projects` array and edit values.

## Structure

- [index.html](index.html) only contains the app mount point
- [scripts/app.js](scripts/app.js) renders the page from data
- [CSS/styles.css](CSS/styles.css) handles styling, responsiveness, and reveal animation
