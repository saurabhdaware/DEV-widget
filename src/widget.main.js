const devCard = document.querySelectorAll('devcard');
devCard.forEach(el => createDevCard(el))

async function renderData(articles,el){
    el.innerHTML = JSON.stringify(articles);
    return true;
}

function createDevCard(el){
    const username = el.dataset.username;
    fetch('https://dev.to/api/articles?username='+username)
        .then(res => res.json())
        .then(res => renderData(res,el))
}
