// Sla een aantal berichten op
const vibes = [
    "... and you are awesome!",
    "... have a wonderful day!",
    "... and you've got this!",
    "... and so is this puppy!",
];

// Kies een random vibe
var vibe = vibes[Math.floor(Math.random() * Math.floor(vibes.length))];

// Laat een vibe zien in de pagina
document.querySelector(".vibe").append(vibe);