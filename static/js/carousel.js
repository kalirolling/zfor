//轮播图 start
window.onload = function() {
        var container = document.getElementById('container');
        var list = document.getElementById('list');
        var buttons = document.getElementById('buttons').getElementsByTagName('span');
        var prev = document.getElementById('prev');
        var next = document.getElementById('next');
        var index = 1;
        var animated = false;
        var timer;
        var leng = buttons.length;

        function showButton() {
            for (var i = 0; i < leng; i++) {
                if (buttons[i].className == 'on') {
                    buttons[i].className = '';
                    break;
                }
            }
            buttons[index - 1].className = 'on';
        }

        function animation(offset) {
            animated = true;
            var newLeft = parseInt(list.style.left) + offset;
            var time = 300; //位移时间
            var interval = 10; //位移间隔时间
            var speed = offset / (time / interval); //每一次位移量

            function go() {
                if ((speed < 0 && parseInt(list.style.left) > newLeft) || (speed > 0 && parseInt(list.style.left) < newLeft)) {
                    list.style.left = parseInt(list.style.left) + speed + 'px';
                    setTimeout(go, interval);
                } else {
                    animated = false;
                    list.style.left = newLeft + 'px';
                    if (newLeft > -1366) {
                        list.style.left = -10928 + 'px';
                    }
                    if (newLeft < -10928) {
                        list.style.left = -1366 + 'px';
                    }
                }
            }
            go();

        }

        function play() {
            timer = setInterval(function() {
                next.onclick();
            }, 3000)
        }

        function stop() {
            clearInterval(timer);
        }


        next.onclick = function() {
            if (index == leng) {
                index = 1;
            } else {
                index += 1;
            }

            showButton();
            if (!animated) {
                animation(-1366);
            }

        }

        prev.onclick = function() {
            if (index == 1) {
                index = leng;
            } else {
                index -= 1;
            }

            showButton();
            if (!animated) {
                animation(1366);
            }
        }

        for (var i = 0; i < buttons.length; i++) {
            if (this.className == 'on') {
                return;
            }
            buttons[i].onclick = function() {
                var myIndex = parseInt(this.getAttribute('index'));
                var offset = -1366 * (myIndex - index);
                if (!animated) {
                    animation(offset);
                }
                index = myIndex;

                showButton();
            }
        }
        container.onmouseover = stop;
        container.onmouseout = play;
        play();
    }
    //轮播图 end