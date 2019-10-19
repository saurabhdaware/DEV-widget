import {css} from './card.style.mjs';

// Throughout this class 'this' refers to the element <dev-card />
class DevCard extends HTMLElement{
    constructor(){
        super();

        

        // Create template and set HTML and css and append it to shadow root
        const template = document.createElement('template');
        template.innerHTML = `<style>
            ${css}
        </style>
        <span class="devcard-htmlContent">
            <div class="card" style="width: ${this.dataset.width}">
                <div class="header">
    
                 </div>
                <div class="content">
    
                </div>
            </div>
        </span>
        `
        
        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.style.display = 'inline-block';
    }

    // Methods from parent class HTMLElement.

    static get observedAttributes(){
        return ['data-username', 'data-width'];
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

        header.innerHTML = // html
        `   <img class="profile-pic" src="${this.articles[0].user.profile_image_90}">
            <div class="name-container">
                ${this.articles[0].user.name}
            </div>
        `;

        content.innerHTML = '';
        for(let article of this.articles){
            content.innerHTML += // html
            `
                <div class="article-card">
                    <a href="${article.url}" class="title" target="_blank">${article.title}</a>
                </div>
            `;
        }
    }
    

    render(){
        return fetch('https://dev.to/api/articles?username='+this.dataset.username)
            .then(res => res.json())
            .then(articles => {
                this.articles = articles;
                this.createCard()
            })
            .catch(console.error);
    }
    
}

customElements.define('dev-card',DevCard);