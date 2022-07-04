$(() => {
    // 动态添加元素
    var title = "Leonus Homepage"
    for (let i = 0; i < title.length; i++) {
        var span = document.createElement('span')
        if (title.charAt(i) == ' ') {
            $('#title').append('<br>')
            continue
        }
        span.innerText = title.charAt(i)
        span.className = 'flip'
        $('#title').append(span)

    }
    // 翻转动画
    document.querySelectorAll('#title span').forEach((span, index) => {
        span.style.setProperty('--delay', `${index * 0.1}s`)
    });
    // 打字效果
    let d = $('#text')
    let i = 0,
        line = 0;
    str = ['Never forget to think!', '不积跬步，无以至千里；不积小流，无以成江海。', '世间本无事，庸人自扰之。', '好记性不如烂笔头。', '愿你走出半生，归来仍是少年。'];
    // 输入
    function typing() {
        if (i < str[line].length) {
            d.html(str[line].slice(0, i++))
            setTimeout(typing, 200 + Math.ceil(Math.random() * 100))
        } else {
            d.html(str[line])
            setTimeout(re_typing, 2000)
        }
    }
    // 删除
    function re_typing() {
        if (i > 0) {
            d.html(str[line].slice(0, i--))
            setTimeout(re_typing, 50)
        } else {
            if (line == str.length - 1) {
                line = 0
            } else {
                line += 1
            }
            d.html('')
            setTimeout(typing, 1000)
        }
    }

    typing();


    $('#menu').click(() => {
        $('.m-nav_c').css("display", 'flex');
        $(".m-left").animate({ left: "0" });
        return false;
    })

    $('.m-right').click(() => {
        $(".m-left").animate({ left: "-230px" }, () => {
            $('.m-nav_c').css("display", 'none');
        });

        return false;
    })
})