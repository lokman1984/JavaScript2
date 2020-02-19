const quotes =[
    '<q> Stay hungry, stay foolish.</q> <br> <br> <cite> -Steve Jobs </cite> <br>',
    '<q>Be yourself; everyone else is already taken.</q> <br> <br><cite>-Oscar Wilde</cite> <br>',
    '<q>So many books, so little time..</q> <br> <br> <cite> -Frank Zappa</cite> <br>',
    '<q>A room without books is like a body without a soul.</q> <br> <br><cite> -Marcus Tullius Cicero</cite>  <br>',
    '<q>Be the change that you wish to see in the world.</q> <br> <br><cite>-Mahatma Gandhi</cite> <br>',
    '<q>Without music, life would be a mistake.</q><br><br><cite> -Friedrich Nietzsche</cite><br>'
];




function buttQuotes(){
    const randomQuotes = Math.floor(Math.random() * quotes.length);
    document.getElementById('text').innerHTML= quotes[randomQuotes];
    
};
