// Array of Love Messages
const loveMessages = [
    "💖 Our love is infinite! 💖",
    "💙 Together forever, no matter what! 💙",
    "💞 You're my world, Ruddu Rani! 💞",
    "❤️ Destiny has brought us together forever! ❤️",
    "✨ No force in this world can separate us! ✨"
];


// Love Button Click Event
document.getElementById("love-btn").addEventListener("click", function() {
    let resultElement = document.getElementById("love-result");
    
    // Always 100% or Infinite Love Score
    let loveScore = Math.random() > 0.5 ? "100%" : "∞ (Infinity)";
    
    // Select a Random Message
    let randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
    
    // Display Result
    resultElement.innerHTML = `${loveScore} - ${randomMessage}`;
    resultElement.style.opacity = "1";
    
    
});
