export const css = // css
`
.card{
    width:300px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    text-align: left;
    font-family: Arial;
}
.profile-pic{
    position:absolute;
    top:14px;left:20px;
    border-radius:100%;
    width:70px;
}
.header{
    background-color:#111;
    color:#fff;
    position:relative;
    height:100px;
}
.content{
    background-color:#fff;
    max-height:300px;
    overflow-y:scroll;
}

.header > .name-container{
    font-weight:bold;
    font-size:15pt;
    margin-left:100px;
    padding:20px 5px;
}

.article-card{
    padding:10px 10px;
    font-size:10pt;
    border-bottom:1px solid #ddd;
}
`