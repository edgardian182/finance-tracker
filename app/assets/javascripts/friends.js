


$(document).ready(function(){
  init_friend_lookup();
})


var init_friend_lookup;

init_friend_lookup = function(){
  
  $('#friend-lookup-form').on('ajax:before', function(event, data, status){
    show_spinner();
  })
  $('#friend-lookup-form').on('ajax:after', function(event, data, status){
    hide_spinner();
  })
  
  $('#friend-lookup-form').on('ajax:success', function(event, data, status){
    $('#friend-lookup').replaceWith(data);
    init_friend_lookup();
  });
  
  $('#friend-lookup-form').on('ajax:error', function(event, xhr, status, error){
    hide_spinner();
    $('#friend_lookup_results').replaceWith(" ");
    $('#friend_lookup_errors').replaceWith("<p><b style='color: red'>Person was not found</b></p>");
  });
  
}