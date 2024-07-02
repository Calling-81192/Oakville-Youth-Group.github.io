let a = document.querySelector('a');
let bg_position = null;
let timer = null;

a.addEventListener('mouseout', function(){
    timer = setInterval(() => {
        //记录鼠标移入每帧的 背景定位
        bg_position = parseInt(getStyle(a, 'background-position-x'));
    }, 24);
});

a.addEventListener('mouseout', function() {
    //定时器清除
    clearInterval(timer);
    timer = null;
    //更改css变量，让下次移入时继续根据上次移出位置继续移动


document.documentElement.style.setProperty('--bg_position-x1', bg_position + '%');

document.documentElement.style.setProperty('--bg_position-x2', bg_position + -400 - "%")
//鼠标每次移出时，a标签背景颜色定位到移出时的位置
a.style.backgroundPosition=bg_position + '%';
//这里让每次鼠标移出时 a标签散光背景颜色定位到移出时的位置
document.styleSheets[0].addRule('a::before', 'background-position-x:${bg_position}%;');
})

    //获取css属性信息，兼容
    function getStyle(element, attr){
        return window.getComputedStyle
            ? getComputedStyle(element, null)[attr]
            : element.currentStyle[attr];
    }

