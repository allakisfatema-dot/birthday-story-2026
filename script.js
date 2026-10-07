const text ="A story of two people, a little distance,a lot of memories , and a love that stayed.";
const typingText = document.getElementById("typing-text");
let index = 0;
function typeText(){
    if(index<text.length){
        typingText.textContent+= text[index];
        index++;
        setTimeout(typeText,80);
    }
}
typeText();
function startStory(){
    document.querySelector(".story-section").scrollIntoView({behavior:"smooth"})
;
}
const storyElements = document.querySelectorAll(
    ".story-section h2,.story-text "
);
function revealStory(){
    storyElements.forEach(function(element) {
        const position = element.getBoundingClientRect().top;
        const screenHeight= window.innerHeight;
        if (position<screenHeight- 100 ){
            element.classList.add("show");
        }

    });
}
window.addEventListener("scroll",revealStory);
revealStory();
function unlockSecret() {

const code = document.getElementById("secret-code").value;

const message = document.getElementById("secret-message");

const secretContent = document.getElementById("secret-content");

const secretLock = document.getElementById("secret-lock");


if (code === "بخش القلب") {

message.textContent = "عرفت الكود... 🤍";

secretLock.style.display = "none";

secretContent.classList.add("show-secret");

} else {

message.textContent = "مو هاد... جرب مرة تانية 🤍";}}
const loveVideo = document.getElementById("love-video");

const finalMessage = document.getElementById("final-message");


if (loveVideo) {

loveVideo.addEventListener("ended", function() {

setTimeout(function() {

finalMessage.classList.add("show-final");

finalMessage.scrollIntoView({
behavior: "smooth",
block: "start"
});

}, 2000);
});
}


