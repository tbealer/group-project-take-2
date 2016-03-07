$(document).on('ready', function() {

Stripe.setPublishableKey('pk_test_PzOjtFHMmRYol4dxJNukCvvv');

$("#purchase").on('submit', function (){
var cardInfo = {
  
  number: $('#cardNumber').val(),
  cvc: $('#cvc').val(),
  exp_month: $('#expiration').val().split('/')[0],
  exp_year: $('#expiration').val().split('/')[1],
};

Stripe.card.createToken(cardInfo, stripeResponseHandler);
});


$('#cardNumber').on('blur', function(){
    var cardNum = $('#cardNumber');
    if (!Stripe.card.validateCardNumber(cardNum.val())){
      cardNum.css('border-color','red');
    } else {
      cardNum.css('border-color','green');
    }
})

$('#cvc').on('blur', function(){
    var cvc = $('#cvc');
    if(!Stripe.card.validateCVC(cvc.val())){
      cvc.css('border-color','red');
    } else {
      cvc.css('border-color','green');
    }
})

$('#expiration').on('blur', function(){
    var exp = $('#expiration');
    var expMonth = exp.val().split('/')[0];
    var expYear = exp.val().split('/')[1];
    if(!Stripe.card.validateExpiry(expMonth, expYear)){
      exp.css('border-color','red');
    } else {
      exp.css('border-color','green');
    }
})

});
