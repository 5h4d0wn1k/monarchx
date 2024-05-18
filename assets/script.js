
document.addEventListener("DOMContentLoaded", function() {
    const quotes = [
        "The only way to do great work is to love what you do. – Steve Jobs",
        "The best way to predict the future is to invent it. – Alan Kay",
        "You miss 100% of the shots you don't take. – Wayne Gretzky",
        "Believe you can and you're halfway there. – Theodore Roosevelt",
        "The future belongs to those who believe in the beauty of their dreams. – Eleanor Roosevelt",
        "It does not matter how slowly you go as long as you do not stop. – Confucius",
        "Act as if what you do makes a difference. It does. – William James",
        "Success is not how high you have climbed, but how you make a positive difference to the world. – Roy T. Bennett"
    ];

    const container = document.querySelector('.container');
    
    quotes.forEach(quote => {
        const quoteDiv = document.createElement('div');
        quoteDiv.className = 'quote';
        quoteDiv.innerHTML = `<p>"${quote}"</p>`;
        container.appendChild(quoteDiv);
    });
});
