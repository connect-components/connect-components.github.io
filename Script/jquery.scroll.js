//垂直方向滚动 
$.fn.extend({

    scrollVertical: function(speed) 
    { 
        if (arguments.length < 1)//如果没有指定速度，按默认的速度进行滚动 
        { 
           var speed = 10; 
        }
      
        function vertial(This) 
        { 
            //alert("fask"); 
            //alert($(This.children().get(1)).outerHeight()); 
            if ($(This.children().get(1)).outerHeight() - This.scrollTop() <= 0)//如果复制得到的元素显示的高度比整个div隐掉的高度小或相等，则heng1已完全隐藏，这时需要复位动画前的位置(即heng.scrollTop置零)，重新开始动画 
            { 
                This.scrollTop(0); 
            } 
            else//如果复制得到的元素显示的高度比整个div隐掉的高度大，heng1还没有完全隐藏，heng.scrollTop继续增加 
            { 
                This.scrollTop(This.scrollTop() + 1); 
            } 
        }

        $(this).wrap("<div id='scrollvarea' style='OVERFLOW: hidden; COLOR: #ffffff;'></div>"); 
        $("#scrollvarea").height($("#scrollvarea").children().get(0).scrollHeight);

        //alert($("#scrollvarea").children().get(0).scrollHeight);

        $(this).clone().insertAfter(this); 
        var scrollVerticalhandle = setInterval(function() { vertial($("#scrollvarea")); }, speed); 
        $("#scrollvarea").mouseover(function() { clearInterval(scrollVerticalhandle); }); 
        $("#scrollvarea").mouseout(function() { scrollVerticalhandle = setInterval(function() { vertial($("#scrollvarea")); }, speed); }); 
    }

});

//水平方向滚动 
$.fn.extend({

    scrollHorizontal: function(speed) { 
        if (arguments.length < 1)//如果没有指定速度，按默认的速度进行滚动 
        { 
            var speed = 50; 
        }

        function horizontal(This) { 
            //alert("fask"); 
            //alert($(This.children().get(1)).outerHeight()); 
            if ($($("#content").children().get(0)).outerWidth() - This.scrollLeft() <= 0)//如果复制得到的元素显示的宽度比整个#scrollharea隐掉的宽度小或相等，则原来的块已完全隐藏，这时需要复位动画前的位置(即#scrollharea的scrollTop置零)，重新开始动画 
            { 
               //alert("afsd"); 
                This.scrollLeft(0); 
                //alert("afsd"); 
            } 
            else//如果复制得到的元素显示的宽度比整个div隐掉的宽度大，原来的块还没有完全隐藏，#scrollharea的scroll继续增加 
            { 
                This.scrollLeft(This.scrollLeft() + 1); 
            } 
        } 
        //先用#scrollharea包裹所要滚动的对象 
        $(this).wrap("<div id='scrollharea' style='OVERFLOW: hidden; COLOR: #ffffff;'></div>"); 
        $("#scrollharea").height($("#scrollharea").children().get(0).scrollHeight); 
        $("#scrollharea").width($("#scrollharea").children().get(0).scrollWidth); 
        //复制滚动的对象 
        $(this).clone().insertAfter(this); 
        //将要滚动的对象和复制得到的对象用一个#content块包裹(这样才能设其宽度，使jquery的scrollTop()有效) 
        $("#scrollharea").children().wrapAll("<div id='content' style='OVERFLOW: hidden;text-align:left;'></div>"); 
        $("#content").height($("#content").children().get(0).scrollHeight); 
        $("#content").width($("#content").children().get(0).scrollWidth*2);//宽度为每个块的二倍 
        //将对象排列在一行 
        $("#content").children().css("float", "left"); 
        //控制动画过程 
        var scrollHorizontalhandle = setInterval(function() { horizontal($("#scrollharea")); }, speed);

        $("#scrollharea").mouseover(function() { 
            clearInterval(scrollHorizontalhandle); 
        } 
        );

        $("#scrollharea").mouseout(function() { 
            scrollHorizontalhandle = setInterval(function() { horizontal($("#scrollharea")); }, speed); 
        } 
        ); 
    }

});

// JScript 文件

