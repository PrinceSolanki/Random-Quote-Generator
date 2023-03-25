const btn = document.getElementById("btn");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const apiUrl = "https://api.quotable.io/random";  

async function getQuote(){
    try {
        quote.innerText = "Loading....";
        author.innerText = "Loading....";
        btn.disabled = true;
        btn.innerText = "getting the quote";
        const response = await fetch(apiUrl).then((resp)=>resp.json());
        quote.innerText = response.content;
        author.innerText = " ~ "+response.author;
        btn.disabled = false;
        btn.innerText = "Get Quote";
    } catch (error) {
        console.log(error);
        quote.innerText = "An error occured, try again later";
        author.innerText = " ~ ";
        btn.disabled = false;
        btn.innerText = "Get Quote";
    }
}

btn.addEventListener("click",getQuote);