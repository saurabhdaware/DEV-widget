# DEV widget
<p align="left">
<img alt="GitHub package.json version" src="https://img.shields.io/github/package-json/v/saurabhdaware/dev-widget?style=flat-square"> <a href="CONTRIBUTING.md"><img alt="Contributions to DEV Widget are welcomed" src="https://img.shields.io/badge/contributions-welcome-brightgreen?style=flat-square"></a>
</p>

***GUI to Generate Card***: [https://dev-widget.netlify.app/create](https://dev-widget.netlify.app/create)

***Codepen***: [https://codepen.io/saurabhdaware/pen/NWWbOvv](https://codepen.io/saurabhdaware/pen/NWWbOvv)

Unofficial Widget / profile card for [dev.to](https://dev.to/). 

You can use it in your website/blog and show off your DEV.to articles :sunflower:
<br><br>

[![Screenshot of the DEV.to Widget](https://res.cloudinary.com/saurabhdaware/image/upload/v1582470292/npm/Screenshot_from_2020-02-23_20-33-03.png)](#installation-and-usage)

---

## Installation and Usage


### - Through script tag

```html
    <dev-widget data-username="saurabhdaware"></dev-widget>

    <!-- Place script tag before the end of the body tag -->
    <script src="https://unpkg.com/dev-widget@^1/dist/card.component.min.mjs" type="module"></script>
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
| data-contentheight | Height of the Aricles Container | 300px             |
| data-theme    | **Theme of the card** (`dark`, `ocean`, `pink`, `cobalt2`, `default`) | default                  |
| data-name (optional)    | Name to display on card       | Will be fetched from API |
| data-limit    | Number of articles to display | 30                       |
| data-sortby   | Sort articles (`date`, `reactions`) | date                |


**Note:** Value of `data-limit` should not be too high. An API request has to be made for every 30 articles so for `data-limit=200` 7 API requests will be made synchronously.

So a full example with every attribute would look something like
```html
<dev-widget 
    data-username="saurabhdaware" 
    data-theme="ocean" 
    data-sortby="reactions" 
    data-width="320px" 
    data-contentheight="200px" 
    data-limit="3" 
    data-name="Saurabh 😎" 
></dev-widget>

<!-- Place script tag before the end of the body tag -->
<script src="https://unpkg.com/dev-widget@^1/dist/card.component.min.mjs" type="module"></script>
```
*Note: Only `data-username` is neccessary and every other attribute is optional*


---
## Themes
`default` `ocean`  `pink`  `dark` `cobalt2`
![DEV Widget themes](https://res.cloudinary.com/saurabhdaware/image/upload/v1574802681/saurabhdawaretk/dev-widget-2.png)

---

## Changelog
**[RELEASES](https://github.com/saurabhdaware/DEV-widget/releases)**

---

## Contributing

I would love to have some of your contributions to this project. You can checkout [CONTRIBUTING.md](CONTRIBUTING.md) for Contribution guidelines.
