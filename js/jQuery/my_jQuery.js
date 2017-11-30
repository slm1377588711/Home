/**
 * Created by slm on 2017-10-23.
 */
$(function(){
    $(".slideshow").click(checkForCode);
    //返回随机数
    function getRandom(num){
        var my_num = Math.floor(Math.random()*num);
        return my_num;
    }
    //隐藏折扣变量
    var hideCode = function(){
        var numRand = getRandom(4);
        $(".slideshow").each(function(index,value){
            console.log(index);
            if (numRand == index){
                $(this).append("<span id='has_discount'></span>");
                return false;
            }

        });
    }
    hideCode();
    function checkForCode(){
        var discount;
        if ($.contains(this,document.getElementById("has_discount"))){
            var my_num = getRandom(100);
            discount = "<p>You Discount is"+my_num+"%</p>";
        }else{
            discount = "<p>Sorry,no discount this time</p>";
        }
        //有折扣的商品显示为红色
        $(".slideshow").each(function(){
            if ($.contains(this,document.getElementById("has_discount"))){
                $(this).addClass("discount");
            }else{
                $(this).addClass("no_discount");
            }
            $(this).unbind('click');
        });
        $("#result").append(discount);
    }
});






















