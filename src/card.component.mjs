import {css} from './card.style.mjs';

// Throughout this class 'this' refers to the element <div-card />
class DevCard extends HTMLElement{
    constructor(){
        super();

        this.htmlContent =  // html
        `
        <div class="hi">ee haw</div>
        `;



        // Create template and set HTML and css and append it to shadow root
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <style>
        ${css}
        </style>
        ` + this.htmlContent;

        this._shadowRoot = this.attachShadow({ mode: 'open' });
        this._shadowRoot.appendChild(this.template.content.cloneNode(true));
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
        console.log(this.template);
        this.template.innerHTML = '<h1>Yas</h1>'
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