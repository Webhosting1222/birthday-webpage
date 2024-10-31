function playSound() {
    alert("🎂 Happy birhtday Hiba! Allah tumhay woh sb ata kry jo tum chahti ho ,Bas thora sa is bicharay py zulm kum kiya kro 😂 (ok kay baad ik song hai woh sun lena)! 🎉");
    var audio = document.getElementById("birthday-audio");
    audio.play();
}

// Falling followers effect
function createFollower() {
    const followerContainer = document.getElementById("followers-container");
    const follower = document.createElement("div");
    follower.classList.add("follower");
    follower.innerText = "👤 Follower"; // Emoji and text for follower
    
    // Random position for the follower to start
    follower.style.left = Math.random() * 100 + "vw";
    follower.style.animationDuration = Math.random() * 3 + 3 + "s"; // Random fall speed
    followerContainer.appendChild(follower);

    // Remove follower after animation ends
    setTimeout(() => {
        follower.remove();
    }, 5000);
}

// Generate falling followers continuously
setInterval(createFollower, 500);
