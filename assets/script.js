document.getElementById('funnyButton').addEventListener('click', function() {
    const responses = [
        "You found the fun!",
        "Keep smiling!",
        "Isn't this cute?",
        "You're awesome!",
        "Have a wonderful day!"
    ];
    const colors = [
        "#ffb6c1",
        "#f0e68c",
        "#dda0dd",
        "#add8e6",
        "#98fb98"
    ];
    const randomIndex = Math.floor(Math.random() * responses.length);
    document.getElementById('response').innerText = responses[randomIndex];
    document.body.style.backgroundColor = colors[randomIndex];
});
