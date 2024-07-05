const quote = document.getElementById("quote")
const authorName = document.getElementById("author")
const category = document.getElementById("category")
const getQuoteBtn = document.getElementById("getQuoteBtn")


var typed = new Typed('#element', {
    strings: ['.....'],
    typeSpeed: 100,
    backSpeed: 10,
    loop: true
})
const handleAnotherQuote = () => {
    quote.innerText = 'Loading'
    authorName.innerText = '~ Author'
    category.innerText = 'Category : '
    typed.begin()
    getQuote()
}

function getQuote() {
    getQuoteBtn.removeEventListener('click', handleAnotherQuote)

    var apiKey = 'zoNMrBGQKnN1JsTfpswKNG6pS6SZFGLResQDIU2J'
    var url = 'https://api.api-ninjas.com/v1/quotes'
    fetch(url, {
        method: 'GET',
        headers: { 'X-Api-Key': apiKey }
    }).then(res => (res.json()))
        .then(parsedData => {
            console.log(parsedData[0])
            quote.innerText = parsedData[0].quote
            authorName.innerText = `~ ${parsedData[0].author}`
            category.innerText = `Category : ${parsedData[0].category}`
            typed.destroy();
            getQuoteBtn.addEventListener('click', handleAnotherQuote)

        })

}
getQuoteBtn.addEventListener('click', handleAnotherQuote)

document.addEventListener("DOMContentLoaded",()=>{
    getQuote()
})


