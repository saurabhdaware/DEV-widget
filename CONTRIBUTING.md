If you are contributing to the Open Source for the first time, You can check out [First Time Contributors Guide](#first-time-contributors-guide)

# Local Setup
- [Fork](https://github.com/saurabhdaware/DEV-widget/fork) the repository 
- `git clone https://github.com/${yourUsername}/DEV-widget`
- `cd DEV-widget`
- `npm install` to install dev dependency
- `npm run dev` will get the server running 

# File Structure
The code is based upon web components and does not use any dependency. You can read more about WebComponents in this [WebComponents Tutorial](https://www.robinwieruch.de/web-components-tutorial)

```js
- src
|- card.component.mjs // Contains the main logic
|- card.style.mjs // Contains the stylesheet
 - index.html // Example and can be used for testing the output
```

# Sending Pull Request
- Create a branch in your forked repository with a relevant name (`e.g enhanced-styling`, `feature-autoreload`)
- Push your changes to the branch
- Create a pull request from your branch to `master` of my branch.


# Development Guide
- If you are looking to add HTML then checkout `createCard()` function from `card.component.mjs`
- If you are looking to add CSS then checkout `card.style.mjs`

# First-time Contributors Guide
- You can checkout the [Issues](https://github.com/saurabhdaware/DEV-widget/issues) and select the one that you like (You can comment on issue with something like *"Let me work on this or I'll kill you"* to let me know that you are working on it.)
- There are issues with label `Difficulty: Easy` and `Difficulty: Super Easy` which are easier to solve as compare to the other issues. Though if you know JavaScript well you can solve `Difficulty: Medium` and `Difficulty: Hard` issues as well.
- Just go through the [Local Setup Guide](#local-setup) to locally setup the project
- Once you are done making changes you can create a Pull Request to the master of this (https://github.com/saurabhdaware/DEV-widget) repository.


# Other Guides

## - Creating Themes

Before you work on a code please create an issue and mention the colors that you want to add and wait for the response. Since adding themes increase the size of the code, only few themes will be chosen for the final version.

Here's an example from `card.style.mjs`:
```css
.card.pink{
    --header-bg:#ffc0cb;
    --header-color:#222;
    --header-logo-filter: invert(0%);
    --content-bg: #fff;
    --content-bghover: #ffc0cb44;
    --content-border: #ffc0cb66;
    --content-color: #555;
    --button-bg: #222;
    --button-color: #ddd;
    --scroll-track: #ffc0cb;
    --scroll-thumb: #999;
    --likes-color: #999;
    --likes-icon-filter: invert(0%);
}
```

To create a theme named "yellow", You will have to create a css block for `.card.yellow` and set the variable names as given in the above example.

With these settings adding `data-theme="yellow"` in the file will apply your colors to the card.