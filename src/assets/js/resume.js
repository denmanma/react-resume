function showHide(bullet) {
    var bulletId = document.getElementById(bullet);
    if (bulletId.style.display !== "block") {
        bulletId.style.display = "block";
    } else {
        bulletId.style.display = "none";
    }
}

export default showHide;
