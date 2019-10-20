# DEV widget
<p align="left">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/saurabhdaware/dev-widget?style=flat-square"> <a href="CONTRIBUTING.md"><img alt="Contributions to DEV Widget are welcomed" src="https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square"></a>
</p>

***Demo*** : [https://dev-widget-demo.netlify.com](https://dev-widget-demo.netlify.com)

Unofficial Widget/profile card for [DEV / dev.to](https://dev.to/).
<br><br>

[![Screenshot of the DEV.to Widget](https://res.cloudinary.com/saurabhdaware/image/upload/v1571605298/saurabh2019/Screenshot_from_2019-10-21_02-30-14.png)](#installation-and-usage)

---

## Installation and Usage

This project ***under development and not ready to be used yet***. 
<br><br> Once completed users will be able to use the DEV widget in their personal websites by simply copy pasting following lines of code

### - Through script tag

```html
    <dev-widget data-username="saurabhdaware"></dev-widget>

    <!-- Place script tag before the end of the body tag -->
    <script src="https://unpkg.com/dev-widget@1.0.0/dist/card.component.mjs" type="module"></script>
```


### - As NPM module
This can be used in React, Vue and almost any other frontend framework 
```sh
npm install --save dev-widget
```

Inside your framework component
```js
import 'dev-widget'
```


--- 

## Attributes Guide

| attributes    | description                   | default                  | 
|---------------|-------------------------------|--------------------------|
| data-username | Your DEV.to Username          |                          |
| data-width    | Width of the card             | 300px                    |
| data-name (optional)    | Name to display on card       | Will be fetched from API |
| data-limit    | Number of articles to display | 30                       |

**Note:** Value of `data-limit` should not be too high. An API request has to be made for every 30 articles so for `data-limit=200` 7 API requests will be made synchronously.

So a full example would look something like 
```html
<dev-widget data-username="saurabhdaware" data-width="320px" data-limit="3" data-name="Saurabh 😎"></dev-widget>

<!-- Place script tag before the end of the body tag -->
<script src="https://unpkg.com/dev-widget@1.0.0/dist/card.component.mjs" type="module"></script>
```

---

## Contributing

I would love to have some of your contributions on this project. You can checkout [CONTRIBUTING.md](CONTRIBUTING.md) for Contribution guidelines.
