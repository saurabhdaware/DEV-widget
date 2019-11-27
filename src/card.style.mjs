export const css = // css
`
.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: left;
    font-family: Arial;
    --header-bg:#111;
    --header-color:#fff;
    --header-logo-filter: invert(50%);
    --content-bg: #fff;
    --content-bghover: #eee;
    --content-border: #ddd;
    --content-color: #222;
    --button-bg: #ddd;
    --button-color: #222;
    --scroll-track: #eee;
    --scroll-thumb: #666;
    --likes-color: #999;
}

/* DARK THEME */
.card.dark{
    --header-bg:#111;
    --header-color:#fff;
    --header-logo-filter: invert(50%);
    --content-bg: #212121;
    --content-bghover: #282828;
    --content-border: #191919;
    --content-color: #686868;
    --button-bg: #ddd;
    --button-color: #222;
    --scroll-track: #777;
    --scroll-thumb: #000;
    --likes-color: #555;
    --likes-icon-filter: invert(90%);
}

/* Pink Theme */
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
    --scroll-track: transparent;
    --scroll-thumb: #ffc0cb;
    --likes-color: #999;
}

/* Ocean Theme */
.card.ocean{
    --header-bg:#090B10;
    --header-color:#999;
    --header-logo-filter: invert(50%);
    --content-bg: #0F101A;
    --content-bghover: #111422;
    --content-border: #090B10;
    --content-color: #5A5B66;
    --button-bg: #999;
    --button-color: #222;
    --scroll-track: #444;
    --scroll-thumb: #000;
    --likes-color: #555;
    --likes-icon-filter: invert(90%);
}

.card.cobalt2 {
    --header-bg:#193549;
    --header-color:#e1efff;
    --header-logo-filter: invert(0%);
    --content-bg: #163042;
    --content-bghover: #1F4662;
    --content-border: #234E6D;
    --content-color: #e1efff;
    --button-bg: #ff9d00;
    --button-color: #15232D;
    --scroll-track: #122738;
    --scroll-thumb: #ffc600;
    --likes-color: #ccc;
    --likes-icon-filter: invert(100%);
}

.profile-pic{
    position:absolute;
    top:23px;left:20px;
    border-radius:100%;
    width:70px;
}
.header{
    background-color:var(--header-bg);
    color:var(--header-color);
    position:relative;
    height:120px;
    overflow:hidden;
}
@media (max-width:768px){
    .header{background-color: var(--header-bg);}
}
.content{
    background-color:var(--content-bg);
    max-height:300px;
    min-height:70px;
    overflow-y:scroll;
}

.content::-webkit-scrollbar {
    width: 2px;
}
 
.content::-webkit-scrollbar-track {
    background-color: var(--scroll-track);
}
 
.content::-webkit-scrollbar-thumb {
  background-color: var(--scroll-thumb);
  border-radius: 5px;
}

.header > .name-container{
    font-weight:bold;
    font-size:14pt;
    overflow-x:hidden;
    margin-left:100px;
    padding:30px 5px;
    position:relative;
    z-index:1;
}

.header > .name-container div.view-profile-container{
    margin-top:3px;
}

.header > .name-container .view-profile-button{
    background-color: var(--button-bg);
    color: var(--button-color);
    font-size:10pt;
    border-radius:3px;
    padding:5px 10px;
    position:relative;
    top:6px;
    text-decoration:none;
}
.article-card{
    padding:10px 10px;
    font-size:10pt;
    border-bottom:1px solid var(--content-border);
    display:block;
    text-decoration:none;
    transition:background-color .5s ease;
}
.article-card:hover{
    background-color: var(--content-bghover);
    transition:background-color .5s ease;
}
.article-card > .title{
    text-decoration:none;
    color: var(--content-color);
    font-weight:400;
}

.dev-logo{
    position:absolute;
    right:-10px;
    top:10px;
    width:130px;
    opacity:.1;
    filter:var(--header-logo-filter);
    z-index:1;
}

.article-icon{
    margin-top:7px;
    padding-left:5px;
}
.article-icon > img{
    width:9px;
    opacity:.2;
}
.card .article-icon > img{
    filter: var(--likes-icon-filter);
}
.article-icon > span{
    color: var(--likes-color);
    font-size:7pt;
}
`