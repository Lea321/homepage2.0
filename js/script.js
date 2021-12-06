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


// 大图弹窗
function open_big(x) {
    document.getElementById('bigimg').src = 'img/' + x + '.jpg';
    document.getElementById("Big").style.display = "flex";
    a = x;
    return a;
}

// 关闭大图
function close_big() {
    document.getElementById("Big").style.display = "none";
}


// 上一张
function change_left() {
    a -= 1;
    if (a < 1) {
        a += 20;
    }
    document.getElementById('bigimg').src = 'img/' + a + '.jpg';
    return a;
}

// 下一张
function change_right() {
    a += 1;
    if (a > 20) {
        a -= 20;
    }
    document.getElementById('bigimg').src = 'img/' + a + '.jpg';
    return a;
}