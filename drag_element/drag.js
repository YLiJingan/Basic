/**
 * 
 * drag.js:拖动绝对定位的HTML元素
 * drag()函数，用于mousedown事件处理程序的调用，随后的mousemove事件将移动之低昂元素，mouseup事件将终止拖动
 * @param {*} elementTopDrag 接收mousedown事件的元素或其某些包含元素
 * @param {*} event mousedown事件对象
 */
function drag(elementTopDrag, event){
    //初始鼠标位置，转换为文档坐标
    var scroll = getScrollOffsets();
    var startX = event.clientX + scroll.x;
    var startY = event.clientY + scroll.y;
    //在文档坐标下，待拖动元素的初始元素
    var origX = elementTopDrag.offsetLeft;
    var origY = elementTopDrag.offsetTop;
    //计算mousedown事件和元素左上角之间的距离   将它另存为鼠标移动的距离
    var deltaX = startX - origX;
    var deltaY = startY - origY;

    //注册mousedown事件之后发生的mousemove和mouseup事件的事件处理程序
    if(document.addEventListener){           //标准事件模型
        document.addEventListener('mousemove', moveHandler, true);
        document.addEventListener('mouseup', upHandler, true);
    }
    else if(document.attachEvent){           //IE8以下的IE事件模型
        //IE事件模型中，捕获事件是通过调用元素上的setCapture()捕获它们
        elementTopDrag.setCapture();
        elementTopDrag.attachEvent('onmousemove', moveHandler);
        elementTopDrag.attachEvent('onmouseup', upHandler);
        //作为mouseup事件看待鼠标捕获的丢失
        elementTopDrag.attachEvent('onlosecapture', upHandler);
    }
    //处理了这个事件，不让任何其他元素看到它
    if(event.stopPropagation) event.stopPropagation();      //取消事件传播  标准模式
    else event.cancelBubble = ture;                         //取消事件传播  IE

    if(event.preventDefault) event.preventDefault();        //取消默认操作  标准模式
    else event.returnValue = false;                         //取消默认操作  IE

    /**
     * 当元素正在被拖动时，这就是捕获mousemove事件的处理程序
     * 用于移动这个元素
     */
    function moveHandler(e){
        if(!e){
            e =window.event;    //IE事件模型
        }
        //移动这个元素到当前鼠标的位置   通过滚动条的位置和初始地啊你时的偏移量来调整
        var scroll = getScrollOffsets();
        elementTopDrag.style.left = (e.clientX + scroll.x - deltaX) + 'px';
        elementTopDrag.style.top = (e.clientY + scroll.y - deltaY) + 'px';
        if(e.stopPropagation) e.stopPropagation();      //取消事件传播  标准模式
        else e.cancelBubble = ture;                         //取消事件传播  IE
    }

    /**
     * 这是捕获在拖动结束时发生的最终mouseup事件的处理程序
     */
    function upHandler(e){
        if(!e){
            e =window.event;
        }
        if(document.removeEventListener){      //DOM事件模型
        document.removeEventListener('mouseup', upHandler, true);
        document.removeEventListener('mousemove', moveHandler, true);
        }
        else if(document.detachEvent){          //IE事件模型
            elementTopDrag.detachEvent('onlosecapture', upHandler);
            elementTopDrag.detachEvent('onmouseup', upHandler);
            elementTopDrag.detachEvent('onmousemove', moveHandler);
            elementTopDrag.releaseCapture();
        }
        if(e.stopPropagation) e.stopPropagation();      //取消事件传播  标准模式
        else e.cancelBubble = ture;                     //取消事件传播  IE
        }
}