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
            <div class="header"></div>
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

        const profilePic = this.articles[0].user.profile_image_90;

        header.innerHTML = // html
        `
            <a class="dev-logo" target="_blank" href="https://dev.to/${this.articles[0].user.username}">
                <img src="https://d2fltix0v2e0sb.cloudfront.net/dev-badge.svg" alt="Saurabh Daware's DEV Profile">
            </a>    
            ${(profilePic)?`<img class="profile-pic" src="${profilePic}">`:''}
            <div class="name-container" ${(profilePic)?'':'style="margin-left:20px;"'}>
                <span>${this.articles[0].user.name}</span>
                <div class="view-profile-container">
                    <a class="view-profile-button" href="https://dev.to/${this.articles[0].user.username}">View Profile</a>
                </div>
            </div>
        `;

        content.innerHTML = '';
        if(this.articles[0].title === ''){ // IF no articles
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

        return fetch('https://dev.to/api/articles?username='+this.dataset.username)
            .then(res => res.json())
            .then(articles => {
                if(articles.length == 0){
                    this.articles = [{
                        "user":{
                            "username": this.dataset.username,
                            "name": this.dataset.username,
                            "profile_image_90": ''
                        },
                        "url":'',
                        "title":''
                    }]
                }else{
                    this.articles = articles;
                }

                this.createCard();
            })
            .catch(err => {
                console.log(err);
            });
    }
    
}

customElements.define('dev-card',DevCard);