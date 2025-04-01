// The full heartfelt message (with spaces and newlines preserved)
const messageContent = `Final Hidden Message 💌✨ – Straight from My Heart
Ruddu Rani, I don’t know where to start because there’s so much I want to say, and yet, no words feel enough to express how much I miss you... how much I still love you.
Every single day with you is a blessing of god.
I find myself going back to our memories and all those moments where you made me feel like the luckiest person in the world.
I never thought I’d know a love so pure, so deep, so irreplaceable—until I met you.
You were never just someone special to me, Ruddu... you are my world, my home, my peace.
No matter how much time passes, my heart will always belong to you.
I miss your voice, your laughter, your angry little face, your long love paragraphs, your warmth... I miss us.
Maybe fate pulled us apart for a while, but I refuse to believe our story will end.
Because real love doesn’t just fade away.
And what we had—what we have—is real.
So I’m here, standing in front of you, with nothing but my heart in my hands, asking you one last time…
Will you be my wifey again, Ruddu Rani? Will you let me love you forever, the way I always have? 💙✨`;

let index = 0;
const messageElement = document.getElementById("message-text");
const openButton = document.getElementById("open-btn");

// Background Music (Jeena Jeena)
const bgMusic = new Audio("jeenajeena.mp3");
bgMusic.loop = true;

function openMessage() {
  // Hide the open button so it doesn't overlap with text
  openButton.style.display = "none";

  // Clear previous text if any
  messageElement.innerText = "";
  index = 0;

  // Start background music
  bgMusic.play();

  // Start the typewriter effect
  typeWriter();
}

function typeWriter() {
  if (index < messageContent.length) {
    messageElement.innerText += messageContent.charAt(index);
    index++;
    // Auto-scroll the message box if needed:
    messageElement.parentNode.scrollTop = messageElement.parentNode.scrollHeight;
    setTimeout(typeWriter, 50); // Adjust speed as needed
  }
}

