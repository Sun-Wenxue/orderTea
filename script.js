const orderForm = document.querySelector('#order-form');
const toTop = document.querySelector('.to-top');

orderForm.addEventListener('submit', function(event) {
  event.preventDefault();    // prevent the form from submitting
  const formData = new FormData(orderForm);
  const formVals = {};
    for(var [key, value] of formData.entries()){
        if(formVals[key]){
            formVals[key] = [value, formVals[key]];
        }else{
            formVals[key] = value;
        }
    }
    console.log(formVals);
    alert(getOrderText(formVals));
});

function getOrderText(formVals) {
    const text =`
    【您的订单已生成】
    ------------------------
    奶茶口味：${formVals.flavor}
    数量：${formVals.num}
    杯型：${formVals.size}
    甜度：${formVals.sweetness}
    免费小料：${formVals["ingredient-free"]?formVals["ingredient-free"]:'-'}
    加价小料：${formVals["ingredient-paid"]?formVals["ingredient-paid"]:'-'}
    是否加冰：${formVals.ice}
    是否去茶底：${formVals.tea}
    地址：${formVals.address}
    手机号：${formVals.phone}
    期待送达时间：${formVals.time}
    备注：${formVals.remarks}
    支付方式：${formVals.payment}
    `;
    return text;
}

toTop.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}