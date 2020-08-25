$("#printing_method").click(function(){
var print_method = $("#printing_method").val();
switch (print_method) {
  case '1':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="1">пленка</option>'));
    $("#material").append( $('<option value="2">баннер литой 510 гр</option>'));
    $("#material").append( $('<option value="3">баннер ламинированный 440 гр</option>'));
    $("#material").append( $('<option value="4">баннерная сетка</option>'));
    $("#material").append( $('<option value="5">бумага</option>'));
    break;
  case '2':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="6">пленка</option>'));
    $("#material").append( $('<option value="7">баннер литой 510 гр</option>'));
    $("#material").append( $('<option value="8">баннер ламинированный 440 гр</option>'));
    $("#material").append( $('<option value="9">бумага</option>'));
    $("#material").append( $('<option value="10">обои</option>'));
    $("#material").append( $('<option value="11">холст</option>'));
    $("#material").append( $('<option value="12">ПЭТ</option>'));
    break;
    case '3':
    $("#material").empty();
    $("#material").append( $('<option value="0">Выберите материал</option>'));
    $("#material").append( $('<option value="13">ПВХ</option>'));
    $("#material").append( $('<option value="14">оцинковка</option>'));
    $("#material").append( $('<option value="15">пенокартон</option>'));
    $("#material").append( $('<option value="16">акрил</option>'));
    $("#material").append( $('<option value="17">полистирол</option>'));
    $("#material").append( $('<option value="18">ПЭТ</option>'));
    break;

}
});

$('#end').click(function(e){
  e.preventDefault();
  var in_width = parseInt($('#width').val());
  var in_height = parseInt($('#height').val());
  var in_quantity = parseInt($('#quantity').val());
  var prom = 0;
  if ($("#printing_method").val() == 3) {
    switch ($("#material").val()){
      case '13': 
      prom = (in_width * in_height * in_quantity) * 870;
      break;
      case '14':
      prom = (in_width * in_height * in_quantity) * 1090;
      break;
      case '15':
      prom = (in_width * in_height * in_quantity) * 1155;
      break;
      case '16':
      prom = (in_width * in_height * in_quantity) * 3450;
      break;
      case '17':
      prom = (in_width * in_height * in_quantity) * 1900;
      break;
      case '18':
      prom = (in_width * in_height * in_quantity) * 1230;
      break;
    };
    $('#itogo').text(String(prom));
  } else if ($("#printing_method").val() == 1) {
      switch ($("#material").val()){
        
        case '1': 
        prom = (in_width * in_height * in_quantity) * 200;
        break;
        
        case '2':
        prom = luvers_shnur_proklei(210, in_width, in_height, in_quantity);
        break;
        
        case '3':
        prom = luvers_shnur_proklei(170, in_width, in_height, in_quantity);
        break;

        case '4': 
        prom = (in_width * in_height * in_quantity) * 210;
        break;

        case '5': 
        prom = (in_width * in_height * in_quantity) * 75;
        break;
      };
      $('#itogo').text(String(prom)); 
    } else if ($("#printing_method").val() == 2) {
      switch ($("#material").val()){
        
        case '6': 
        prom = (in_width * in_height * in_quantity) * 280;
        break;
        
        case '7':
        prom = luvers_shnur_proklei(280, in_width, in_height, in_quantity);
        break;
        
        case '8':
        prom = luvers_shnur_proklei(250, in_width, in_height, in_quantity);
        break;

        case '9': 
        prom = (in_width * in_height * in_quantity) * 200;
        break;

        case '10': 
        prom = (in_width * in_height * in_quantity) * 350;
        break;

        case '11': 
        prom = (in_width * in_height * in_quantity) * 650;
        break;

        case '12': 
        prom = (in_width * in_height * in_quantity) * 450;
        break;
      };
    $('#itogo').text(String(prom));
  }
});

function luvers_shnur_proklei(cena, in_width, in_height, in_quantity){
        var prom = 0;
        prom = (in_width * in_height * in_quantity) * cena;
        var value = $('input[name="luvers"]:checked').val();
        if (value == 1){
          prom = Math.round(prom + (((in_width + in_height) * 2 * 100 / 25) + 4) * 10);
        } else if (value == 2){
          prom = Math.round(prom + (((in_width + in_height) * 2 * 100 / 30) + 4) * 10);
        } else if (value == 3){
          prom = Math.round(prom + (((in_width + in_height) * 2 * 100 / 50) + 4) * 10);
        } else if (value == 4){
          prom = prom + 4 * 10;
        };
        if ($('#shnur').is(':checked')){
          prom = prom + (in_width + in_height) * 2 * 60;
        };
        if ($('#proklei').is(':checked')){
          prom = prom + (in_width + in_height) * 2 * 40;
        };
        return prom;
};

/*var itog = parseInt($('#itogo').text());
if (itog > 0){
  $('#end').html('Пересчитать');
}*/