const my_checkbox = document.getElementById("my_checkbox")
const visa_button = document.getElementById("visa_button")
const master_card = document.getElementById("master_card")
const paypal = document.getElementById("paypal")
const submit_btn = document.getElementById("submit_btn")
const sub_result = document.getElementById("p1")
const pay_result = document.getElementById("p2")

submit_btn.onclick=function(){
    if (my_checkbox.checked){
        sub_result.textContent=`You are Subscribed!`;
    }
    else {
        sub_result.textContent=`You are NOT subscribed.`;
    }

    if (visa_button.checked){
        pay_result.textContent=`You selected VISA.`
    }
    else if (master_card.checked){
        pay_result.textContent=`You selected MasteCard.`
    }
    else if (paypal.checked){
        pay_result.textContent=`You selected PayPal.`
    }
    else {
        pay_result.textContent=`Oops! You forgot to select payment options.`
    }
}
