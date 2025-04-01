// Redirect to Quiz Page
function startGame() {
    window.location.href = "quiz.html";
}



// Redirect to Gallery After Final Page
function goToGallery() {
    window.location.href = "gallery.html";
}

// Redirect to Home Page
function goHome() {
    window.location.href = "index.html";
}

// Generate Floating Hearts Effect
function createHearts() {
    const heartContainer = document.querySelector(".hearts-container");
    if (!heartContainer) return; // Prevent error if not on a page with hearts

    for (let i = 0; i < 20; i++) {
        let heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s";
        heartContainer.appendChild(heart);
    }
}

// Generate Floating Butterflies Effect
function createButterflies() {
    const butterflyContainer = document.querySelector(".butterflies-container");
    if (!butterflyContainer) return;

    for (let i = 0; i < 5; i++) {
        let butterfly = document.createElement("div");
        butterfly.className = "butterfly";
        butterfly.style.left = Math.random() * 100 + "vw";
        butterfly.style.animationDuration = Math.random() * 2 + 3 + "s";
        butterflyContainer.appendChild(butterfly);
    }
}

// Ensure Background Video Works on All Pages
function checkBackgroundVideo() {
    const bgVideo = document.getElementById("bg-video");
    if (bgVideo) {
        bgVideo.play().catch(error => console.log("Autoplay blocked:", error));
    }
}

// Execute Functions on Page Load
document.addEventListener("DOMContentLoaded", () => {
    createHearts();
    createButterflies();
    checkBackgroundVideo();

    // If on the final page, enable the gallery button only after a delay
    if (window.location.pathname.includes("final.html")) {
        setTimeout(() => {
            document.getElementById("galleryButton").style.display = "block";
        }, 3000);
    }
});
// Music Control
let music = document.getElementById("background-music");
let volumeSlider = document.getElementById("volumeSlider");
let musicIcon = document.getElementById("music-icon");

// Function to enable autoplay when user interacts
function enableMusicAutoplay() {
    if (music.paused) {
        music.muted = false; // Unmute when user interacts
        music.play().catch(error => console.log("Autoplay prevented:", error));
    }
}

// Play/Pause Music Toggle
function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.textContent = "🔊"; // Change icon to speaker
    } else {
        music.pause();
        musicIcon.textContent = "🔇"; // Change icon to mute
    }
}

// Adjust Music Volume
function adjustVolume() {
    let volume = volumeSlider.value;
    music.volume = volume; // Set volume
}
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery-item img");
    const overlay = document.createElement("div");
    overlay.classList.add("image-overlay");
    document.body.appendChild(overlay);

    const overlayImage = document.createElement("img");
    overlay.appendChild(overlayImage);

    images.forEach((image) => {
        image.addEventListener("click", () => {
            overlayImage.src = image.src;
            overlay.classList.add("show");
        });
    });

    overlay.addEventListener("click", () => {
        overlay.classList.remove("show");
    });
});
function revealText(box) {
    let text = box.querySelector(".hidden-text");
    if (!text.classList.contains("revealed")) {
        text.classList.add("revealed");
        releaseButterflies();
    }
}

function releaseButterflies() {
    for (let i = 0; i < 5; i++) {
        let butterfly = document.createElement("div");
        butterfly.className = "butterfly";
        butterfly.style.left = Math.random() * 100 + "vw";
        document.querySelector(".butterflies-container").appendChild(butterfly);

        setTimeout(() => {
            butterfly.remove();
        }, 4000);
    }
}
function calculateLove() {
    let name1 = document.getElementById("name1").value.trim();
    let name2 = document.getElementById("name2").value.trim();

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML = "Please enter both names!";
        return;
    }

    // Random messages but always showing 100% or infinite love
    let loveMessages = [
        "💖 Love Score: 100% - Our hearts beat as one!",
        "😍 ∞ Infinite Love - No beginning, no end!",
        "💑 100% Love - Destiny made us for each other!",
        "🌟 ∞ Eternal Bond - Forever & Beyond!",
        "🔥 100% - Our souls are connected for life!",
        "❤️ ∞ Infinite Love - Beyond space & time!",
        "💘 100% - No force can break this love!",
        "💞 ∞ Love - True love never fades!"
    ];

    // Pick a random love message
    let message = loveMessages[Math.floor(Math.random() * loveMessages.length)];

    // Show result
    document.getElementById("result").innerHTML = `${name1} ❤️ ${name2} <br> ${message}`;

    // Start the heart animation
    createHearts();
}

function createHearts() {
    let heartContainer = document.getElementById("heart-container");
    heartContainer.innerHTML = ""; // Clear previous hearts

    for (let i = 0; i < 15; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "%";
        heart.style.animationDuration = (3 + Math.random() * 2) + "s";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heartContainer.appendChild(heart);

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 4000);
    }
}

// Ensure background music plays
document.addEventListener("DOMContentLoaded", () => {
    let audio = document.getElementById("background-music");
    audio.volume = 0.5; // Set initial volume
});
// Final Hidden Message
const message = `Final Hidden Message 💌✨ – Straight from My Heart

Ruddu Rani, I don’t know where to start because there’s so much I want to say, and yet, no words feel enough to express how much I miss you... how much I still love you. Every single day without you feels incomplete. 

I find myself going back to our memories—our first conversation on the bus, our first kiss on the scooty, the way you cried during Satranga, our silly fights, our late-night calls, and all those moments where you made me feel like the luckiest person in the world. 

I never thought I’d know a love so pure, so deep, so irreplaceable—until I met you. You were never just someone special to me, Ruddu... you are my world, my home, my peace. 

No matter how much time passes, my heart will always belong to you. I miss your voice, your laughter, your angry little face, your long love paragraphs, your warmth... I miss us. 

Maybe fate pulled us apart for a while, but I refuse to believe our story ends here. Because real love doesn’t just fade away. And what we had—what we have—is real. 

So I’m here, standing in front of you, with nothing but my heart in my hands, asking you one last time…

Will you come back to me, Ruddu Rani? Will you let me love you forever, the way I always have? 💙✨`;

// Create audio element
const audio = new Audio("jeenajeena.mp3"); 

// Typing Effect & Play Music
function startTyping() {
    let index = 0;
    const textElement = document.getElementById("message-text");
    textElement.innerHTML = ""; // Clear previous text

}
const messageText = "Ruddu Rani, I don’t know where to start because there’s so much I want to say, and yet, no words feel enough to express how much I miss you... how much I still love you. Every single day without you feels incomplete. I find myself going back to our memories—our first conversation on the bus, our first kiss on the scooty, the way you cried during Satranga, our silly fights, our late-night calls, and all those moments where you made me feel like the luckiest person in the world. I never thought I’d know a love so pure, so deep, so irreplaceable—until I met you. You were never just someone special to me, Ruddu... you are my world, my home, my peace. No matter how much time passes, my heart will always belong to you. I miss your voice, your laughter, your angry little face, your long love paragraphs, your warmth... I miss us. Maybe fate pulled us apart for a while, but I refuse to believe our story ends here. Because real love doesn’t just fade away. And what we had—what we have—is real. So I’m here, standing in front of you, with nothing but my heart in my hands, asking you one last time…  Will you come back to me, Ruddu Rani? Will you let me love you forever, the way I always have? 💙✨";

let index = 0;
let isPlaying = false;
const messageElement = document.getElementById("message-text");
const openButton = document.getElementById("message-open-btn");
const messageBox = document.getElementById("message-box");

// Background Music
letaudio = new Audio("jeenajeena.mp3");
audio.loop = true;

function openMessage() {
    openButton.style.display = "none";
    messageBox.style.display = "block";
    messageElement.innerHTML = "";
    index = 0;

    if (!isPlaying) {
        audio.play();
        isPlaying = true;
    }

    typeMessage();
}

// Typewriter Effect
function typeMessage() {
    if (index < messageText.length) {
        messageElement.innerHTML += messageText.charAt(index);
        index++;
        setTimeout(typeMessage, 50);
    }
}

// Falling Hearts Effect
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("message-heart");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.top = "-20px";
    heart.style.fontSize = Math.random() * 20 + 10 + "px";
    heart.style.animation = "message-fall " + (Math.random() * 2 + 3) + "s linear infinite";
    document.querySelector(".message-hearts-container").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 500);
// Array of Romantic Messages
const loveMessages = [
    "💖 Our love is infinite! 💖",
    "💙 Together forever, no matter what! 💙",
    "💞 You're my world, Ruddu Rani! 💞",
    "❤️ Destiny has brought us together forever! ❤️",
    "✨ No force in this world can separate us! ✨"
];

// Audio Setup
letlaying = false;
let loveAudio = new Audio("jeenajeena.mp3");



