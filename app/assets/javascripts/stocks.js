


$(document).ready(function(){
  init_stock_lookup();
})


var init_stock_lookup;

init_stock_lookup = function(){
  $('#stock-lookup-form').on('ajax:success', function(event, data, status){
    $('#stock-lookup').replaceWith(data);
    init_stock_lookup();
  });
  
  $('#stock-lookup-form').on('ajax:error', function(event, xhr, status, error){
    $('#stock_lookup_results').replaceWith(" ");
    $('#stock_lookup_errors').replaceWith("<p><b style='color: red'>Stock was not found</b></p>");
  });
  
}