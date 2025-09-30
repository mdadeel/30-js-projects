function triggerSound(event) {
    const keyCode = event.keyCode;

    const sound = document.querySelector(`audio[data-key="${keyCode}"]`);
    const button = document.querySelector(`.key[data-key="${keyCode}"]`);

    if (!sound || !button) return;

    // play sound
    sound.currentTime = 0;
    sound.play();

    // add visual effect
    button.classList.add("active");
}

// remove class after transition ends
function removeActiveClass(event) {
    if (event.propertyName !== "transform") return; // only run on transform
    this.classList.remove("active");
}

// attach listeners once
const allKeys = document.querySelectorAll(".key");
allKeys.forEach((button) => {
    button.addEventListener("transitionend", removeActiveClass);
});

// keyboard input listener
window.addEventListener("keydown", triggerSound);
