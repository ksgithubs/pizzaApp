$(document).ready(function(){
    $('tbody tr:odd').addClass('ttable');
   $('tbody tr:even').addClass('tt3table');
  $(".toggleBtn").click(function () {
       $("thead tr").toggleClass("trAltCizgi");
       $("thead").toggleClass("thead");
       $("tr").toggleClass("tr");
       $("td").toggleClass("td");
       $("th").toggleClass("th");
       $("tbody").toggleClass("tbody");
       $("tbody tr:odd").toggleClass('ttable');
       $("tbody tr:even").toggleClass('tt3table');
   });
});