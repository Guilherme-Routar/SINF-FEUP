# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
`
var base_url_primavera = 'http://localhost:49822/api';
var url_categoria = 'http://localhost:3000/categoria/';

$(document).ready(function () {
	var id_book = $("#book-title").attr('data-id-book');

  $('#botao-loading').html(botao_load);

	getBook(id_book);

  $('.book-img').click(function(){
      $('#book-img-input').click(); 
  });

  $('#book-img-input').change(function() {
      addImgToBook($('#book-img-input')[0].files[0],
          $('#book-img-input').attr('data-id-book'))
  });

  $('#book-del-img').click(deleteImg);
    
});


function getBook(id){
	var url_book = base_url_primavera + '/artigos/' + id;

	$.ajax({
    url: url_book,
    dataType: 'json',
    type: 'GET',
    error: function(err) {
      $("#book-title").html('<h2>Problema ao obter livro, ou livro inexistente...</h2>');
      console.log("error fetching book");
      console.log(err);
    },
    success: function(data) {
      console.log(data);
      $('#book-title').html(data.DescArtigo);
      var price = data.PVP;
      var preco_iva = (data.PVP*(1+data.IVA/100.0)).toFixed(2);
      preco_iva+='€'; 

      $('#book-price').html(preco_iva);

      if(data.MarcaDesc != null) {
        $('#book-autor').html('Autor: ' + data.MarcaDesc);
      } else $('#book-autor').remove();

      $('#book-categoria em').html(data.CategoriaDesc);
      $('#book-categoria').attr('href',url_categoria + data.Categoria);

      if(data.SubCategoriaDesc != null) {
      	$('#book-subcategoria').before(' / ');
      	$('#book-subcategoria em').html(data.SubCategoriaDesc);
      	$('#book-subcategoria').attr('href',url_categoria + data.Categoria + '/' + data.SubCategoria);
      }

      $('#botao-loading').remove();
    }
	});
}

function addImgToBook(img,bookId) {
  $('#botao-loading').html(botao_load);

  var formData = new FormData();
  formData.append('imagem[image]',img);
  formData.append('imagem[idBook]',bookId);
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
  imgId = $('.book-img-div.active').attr('data-img-id');
  $.ajax({
    url: '/image/'+imgId,
    type: 'DELETE',
    success: function () {
      location.reload();
    }
  });
}

`