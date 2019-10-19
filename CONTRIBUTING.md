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
- Create a branch in your forked repository with relevant name (`e.g enhanced-styling`, `feature-autoreload`)
- Push your changes to the branch
- Create a pull request from your branch to `master` of my branch.


# Development Guide
- If you are looking to add HTML then checkout `createCard()` function from `card.component.mjs`
- If you are looking to add CSS then checkout `card.style.mjs`