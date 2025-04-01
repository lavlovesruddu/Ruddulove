function revealText(element) {
    let hiddenText = element.querySelector(".hidden-text");
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
    } else {
        hiddenText.style.display = "none";
    }
}
