var x = 0;

function mnav() {
    if (x == 0) {
        document.getElementById("m-nav_c").style.display = "flex";
        x = 1
    } else {
        document.getElementById("m-nav_c").style.display = "none";
        x = 0
    }
}