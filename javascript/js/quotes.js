const quotes = [
    {
    quote: "When you feel like giving up, you are close to success.",
    author: "Bob Parsons",
    },
    {
    quote: "Recording dreams has never been the goal. My goal is to make my dream come true.",
    author: "Manlei",
    },
    {
    quote: "The greatest competitiveness is passion.",
    author: "Jack Welch",
    },
    {
    quote: "I have to go beyond my life like myself. That's how I live my life as master.",
    author: "Senda Takuya",
    },
    {
    quote: "I failed 9 times out of 10 attempts. So I tried 10 times.",
    author: "George Bernard Shaw",
    },
    {
    quote: "The only thing we really own is time. Even those who have nothing else have time.",
    author: "Balthasar Gracian",
    },
    {
    quote: "Enjoy your own life. Don't compare your life to others.",
    author: "Con d'Orsay",
    },
    {
    quote: "Tomorrow we hope we have learned something from yesterday.",
    author: "John Wayne",
    },
    {
    quote: "The secret to getting ahead is to start.",
    author: "Mark Twain",
    },
    {
    quote: "Luck is what remains after 100% effort.",
    author: "Langster Coleman",
    },
    ];

    const quote = document.querySelector("#quote span:first-child");
    const author = document.querySelector("#quote span:last-child");

    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;

    console.log(quotes[Math.floor(Math.random() * quotes.length)]);