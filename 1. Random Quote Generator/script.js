async function onLoadQuoteFetcher() {
    const quoteReceived = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            "X-Api-Key": ""
        }
    })
    .then((res) => res.json())
    .then((res) => res[0]); // API returns array with one element - this takes that element and gives me only it, not the whole raw array
    document.getElementById("quote-fill-one").innerHTML =
    `
        <h3>"${quoteReceived.quote}"</h3>
        <h4>Author: ${quoteReceived.author}</h4>
        <h4>Category: ${quoteReceived.category}</h4>
    `
    document.getElementById("quote-fill-one").style = 
    `
        background: rgba(218,165,32,0.6); 
        border-radius: 10px;
        padding: 10px;
        text-align: center;
    `
}
async function onClickQuoteFetcher() {
    document.getElementById("quote-title").style = "display: block;"
    const quoteReceived = await fetch("https://api.api-ninjas.com/v1/quotes", {
        headers: {
            "X-Api-Key": ""
        }
    })
    .then((res) => res.json())
    .then((res) => res[0]);
    document.getElementById("quote-fill-two").innerHTML = 
    `
        <h3>"${quoteReceived.quote}"</h3>
        <h4>Author: ${quoteReceived.author}</h4>
        <h4>Category: ${quoteReceived.category}</h4>
    `
    document.getElementById("quote-fill-two").style = 
    `
        background: rgba(218,165,32,0.6); 
        border-radius: 10px;
        padding: 10px;
        text-align: center;
    `
}