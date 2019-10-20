export const css = // css
`
.card{
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: left;
    font-family: Arial;
}
.profile-pic{
    position:absolute;
    top:23px;left:20px;
    border-radius:100%;
    width:70px;
}
.header{
    background-color:#111;
    color:#fff;
    position:relative;
    height:120px;
    overflow:hidden;
}
@media (max-width:768px){
    .header{background-color:#111;}
}
.content{
    background-color:#fff;
    max-height:300px;
    min-height:70px;
    overflow-y:scroll;
}

.content::-webkit-scrollbar {
    width: 1px;
}
 
.content::-webkit-scrollbar-track {
    background-color:#eee;
}
 
.content::-webkit-scrollbar-thumb {
  background-color:#222;
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
    background-color:#ddd;
    color:#222;
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
    border-bottom:1px solid #ddd;
    display:block;
    text-decoration:none;
    transition:background-color .5s ease;
}
.article-card:hover{
    background-color:#eee;
    transition:background-color .5s ease;
}
.article-card > .title{
    text-decoration:none;
    color:#111;
    font-weight:400;
}

.dev-logo{
    position:absolute;
    right:-10px;
    top:10px;
    width:130px;
    opacity:.1;
    filter:invert(50%);
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
.article-icon > span{
    color:#999;
    font-size:7pt;
}
`