var base_url_primavera = 'http://localhost:49822/api';
var url_categoria = 'http://localhost:3000/categoria/';


botao_load = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';

console.log("Ready to connect...");


$(document).ready(function () {
  var id_produto = $("#prod-title").attr('data-id-product');

  console.log("PRODUCT ID : ");
  console.log(id_produto);

  $('#botao-loading').html(botao_load);

  getProduto(id_produto);

  $('.product-img').click(function(){
      $('#product-img-input').click(); 
  });

  $('#product-img-input').change(function() {
      addImgToProduct($('#product-img-input')[0].files[0],
          $('#product-img-input').attr('data-id-product'))
  });

  $('#product-del-img').click(deleteImg);
    
});


function getProduto(id){
  var url_prod = base_url_primavera + '/artigos/' + id;

  $.ajax({
    url: url_prod,
    dataType: 'json',
    type: 'GET',
    error: function(err) {
      $("#prod-title").html('<h2>Problema ao obter produto, ou produto inexistente...</h2>');
      console.log("error fetching product");
      console.log(err);
    },
    success: function(data) {
      console.log(data);
      $('#prod-title').html(data.DescArtigo);
      var price = parseInt(data.PVP);
        console.log("PVP: " + price);
        var iva = parseInt(data.IVA);
        console.log("IVA : " + iva);
      var preco_iva = (price*(1+iva/100.0)).toFixed(2) + " ";

        console.log("PRECO :" + preco_iva);
      preco_iva+=data.Moeda;

      $('#prod-price').html(preco_iva);

      if(data.Marca != null) {
        $('#prod-marca').html('Autor: ' + data.Marca);
      } else $('#prod-marca').remove();

      $('#prod-categoria em').html(data.Categoria);
      $('#prod-categoria').attr('href',url_categoria + data.Categoria);

      if(data.SubCategoriaDesc != null) {
        $('#prod-subcategoria').before(' / ');
        $('#prod-subcategoria em').html(data.SubCategoriaDesc);
        $('#prod-subcategoria').attr('href',url_categoria + data.Categoria + '/' + data.SubCategoria);
      }

      $('#prod-estado em').html(data.Estado);


      $('#botao-loading').remove();
    }
  });
}

function addImgToProduct(img,productId) {
  $('#botao-loading').html(botao_load);

  var formData = new FormData();
  formData.append('imagem[image]',img);
  formData.append('imagem[idProduto]',productId);
  $.ajax({
    url: '/image',
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
    type: 'PUT',
    success: function () {
      location.reload();
    }
  });
}

function deleteImg() {
  $('#botao-loading').html(botao_load);
  imgId = $('.product-img-div.active').attr('data-img-id');
  $.ajax({
    url: '/image/'+imgId,
    type: 'DELETE',
    success: function () {
      location.reload();
    }
  });
}

;
