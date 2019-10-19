import {css} from './card.style.mjs';

const htmlContent =  // html
`
<div class="card">
    <div class="header">

    </div>
    <div class="content">

    </div>
</div>
`;

// Throughout this class 'this' refers to the element <div-card />
class DevCard extends HTMLElement{
    constructor(){
        super();

        

        // Create template and set HTML and css and append it to shadow root
        const template = document.createElement('template');
        template.innerHTML = `<style>
            ${css}
        </style>
        <span class="devcard-htmlContent">
            ${htmlContent}
        </span>
        `

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));
        this.style.display = 'inline-block';
    }

    // Methods from parent class HTMLElement.

    static get observedAttributes(){
        return ['data-username'];
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
        this._shadowRoot.querySelector('.header').innerHTML = `<span class="name">${this.articles[0].user.name}</span>`
        for(let article of this.articles){
            this._shadowRoot.querySelector('.content').innerHTML += `
                <div class="article-card">
                    ${article.title}
                </div>
                <hr>
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