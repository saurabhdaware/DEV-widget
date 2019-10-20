import {css} from './card.style.mjs';

// Throughout this class 'this' refers to the element <dev-card />
class DevCard extends HTMLElement{
    constructor(){
        super();

        // Create template and set HTML and css and append it to shadow root
        const template = document.createElement('template');
        template.innerHTML = // html
        `<style>
            ${css}
        </style>
        <div class="card">
            <div class="header">
                <img class="dev-logo" src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Saurabh Daware's DEV Profile">
            </div>
            <div class="content">

            </div>
        </div>
        `
        
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.style.display = 'inline-block';
    }

    // Methods from parent class HTMLElement.

    static get observedAttributes(){
        return ['data-width'];
    }

    attributeChangedCallback(name,oldUsername,newUsername){
        this[name] = newUsername;
        this.render();
    }

    connectedCallback(){
        // mounted

    }


    // Custom Methods of this class

    createCard(){
        // Main logic goes here
        console.log(this.articles);

        const header = this._shadowRoot.querySelector('.header');
        const content = this._shadowRoot.querySelector('.content');
        let data = {}
        if(this.articles.length == 0){
            data = {
                profilePic: false,
                name: this.dataset.name || this.dataset.username,
                url: this.dataset.username
            }
        }else{
            data = {
                profilePic: this.articles[0].user.profile_image_90,
                name: this.dataset.name || this.articles[0].user.name,
                url: 'https://dev.to/' + this.articles[0].user.username
            }
        }
        // const profilePic = this.articles[0].user.profile_image_90;

        header.innerHTML += // html
        `
            ${(data.profilePic)?`<img class="profile-pic" src="${data.profilePic}">`:''}
            <div class="name-container" ${(data.profilePic)?'':'style="margin-left:20px;"'}>
                <span>${data.name}</span>
                <div class="view-profile-container">
                    <a target="_blank" class="view-profile-button" href="${data.url}">View Profile</a>
                </div>
            </div>
        `;

        content.innerHTML = '';
        if(this.articles.length === 0){ // IF no articles
            content.style.maxHeight = '0px';
            content.style.minHeight = '0px';
            return;
        }

        for(let article of this.articles){
            content.innerHTML += // html
            `
                <a href="${article.url}" target="_blank" class="article-card">
                    <span class="title">${article.title}</span>
                </a>
            `;
        }
    }
    

    render(){
        const computedWidth = getComputedStyle(this, null).width;
        if(computedWidth == '1px'){ // width is not set in css
            this.style.width = this.dataset.width || '300px';
        }else{
            this.style.width = computedWidth;
        }

        this.articles = [];

        return fetch('https://dev.to/api/articles?username='+this.dataset.username)
            .then(res => res.json())
            .then(articles => {
                this.articles = articles;
                this.createCard();
            })
            .catch(err => {
                console.log(err);
            });
    }
    
}

customElements.define('dev-card',DevCard);