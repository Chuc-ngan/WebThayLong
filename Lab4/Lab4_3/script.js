document.addEventListener('DOMContentLoaded', function() {
    var greetings = [
        'Chào bạn!',
        'Hello!',
        'Bonjour!',
        '¡Hola!',
        'Ciao!',
        '안녕하세요!'
    ];

    var randomGreeting = greetings[Math.floor(Math.random() * greetings.length)];
    document.getElementById('greeting').textContent = randomGreeting;
});