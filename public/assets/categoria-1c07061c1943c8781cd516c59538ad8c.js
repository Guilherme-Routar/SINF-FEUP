function getProdutosCategoria(o){var a=null;a=base_url_primavera+"/artigos/categoria/"+o,$.ajax({url:a,error:function(o){console.log("error fetching products of categorie"),console.log(o)},dataType:"json",success:function(o){var a=$.parseJSON(o);if($("#artigos-container").html(""),0==a.length)$("#artigos-container").append("<i>N\xe3o existem artigos nesta categoria...</i>");else for(var t in a){artigos[a[t].CodArtigo]=a[t];var r=getProductContainer2(a[t],null);$("#artigos-container").append(r)}},type:"POST"})}botao_load='<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';var base_url_primavera="http://localhost:49822/api",url_produto="http://localhost:3000/product/",artigos=[],is_subcategoria=!1;$(document).ready(function(){$("#artigos-container").html(botao_load);var o=$("#titulo-categoria").attr("data-id-categoria");console.log("ID CATEGORIA : "+o);var a=base_url_primavera+"/categorias/"+o;$.ajax({type:"GET",url:a,error:function(){console.log("error fetching category"),$("#titulo-categoria").html("erro")},dataType:"json",success:function(a){console.log(a);var t=a,r=t.DescCategoria;console.log("DESC ARTIGO : "+r),console.log(t),$("#titulo-categoria").html(r),getProdutosCategoria(o)}})});