$(document).on('ready', function() {

  var $input = $("#moveInfo");
  console.log($input)

  $('#moveInfo').on('click',function() {
   if($('#moveInfo').is(':checked')) { 

      var firstName = $('#firstName').val();
      $('#bfirstName').val(firstName);
      
      var lastName = $('#lastName').val();
      $('#blastName').val(lastName);
      
      var company = $('#company').val();
      $('#bcompany').val(company);
      
      var address1 = $('#addLine1').val();
      $('#baddLine1').val(address1);
      
      var address2 = $('#addLine2').val();
      $('#baddLine2').val(address2);
      
      var stateId = $('#stateId').val();
      $('#bstateId').val(stateId);

      var zip = $('#zipCode').val();
      $('#bzipCode').val(zip);

    }
});
 
 



});