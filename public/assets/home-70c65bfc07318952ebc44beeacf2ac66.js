botao_loadTopArtigos = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';
botao_loadCategorias = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';
botao_loadTopAutores = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';
botao_loadBestDeals = '<button class="btn btn-lg btn-warning"><span class="glyphicon glyphicon-refresh glyphicon-refresh-animate"></span> A carregar...</button>';


var base_url_primavera = 'http://localhost:49822/api';
var url_produto = 'http://localhost:3000/product/';

$(document).ready(function () {


    //fetch do Top
    var url_top = base_url_primavera + '/TopLivros';
    $('#artigos-container').html(botao_loadTopArtigos);
    $.ajax({
        url: url_top,
        error: function(err) {
            console.log("error fetching top.");
            console.log("ARTIGOS CONTAINER ERROR");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#artigos-container').html('');
            for(var  i in data){

                top[i] = $.parseJSON(JSON.stringify(data[i]));
                var cod = top[i].CodArtigo;
                var desc = top[i].DescArtigo;
                var pvp = parseInt(top[i].PVP);
                var iva = parseInt(top[i].IVA);
                var moeda = top[i].Moeda;
                var preco_iva = (pvp * (1 - (iva/100))).toFixed(2);




                var top_element = '<a class="btn btn-primary" style="width: 100%; height: 60px; background-color: #555555; border-color:#fff ;color: white;" href="/product/' + cod + '"> <p></p>' + desc;
                $('#artigos-container').append(top_element);
            }
        },
        type: 'GET'
    });
    console.log("HERE1");

    var url_categorias = base_url_primavera + '/categorias';
    //console.log(url_categorias);
    $('#categorias-container').html(botao_loadCategorias);
    $.ajax({
        url: url_categorias,
        error: function(err) {
            console.log("error fetching top.");
            //console.log("ola");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#categorias-container').html('');
            for(var  i in data){

                top[i] = $.parseJSON(JSON.stringify(data[i]));
                cod = top[i].CodCategoria;
                //console.log("COD" + top[i].CodCategoria);
                desc = top[i].DescCategoria;
                numExemplares ="Numero de Exemplares" + top[i].numExemplaresCategoria;

                var top_element = '<a class="btn btn-primary" style="width: 100%; height: 60px; background-color: #555555; border-color:#fff ;color: white;" href="/categoria/' + cod + '"> <p></p>' + desc;
                $('#categorias-container').append(top_element);
            }
        },
        type: 'GET'
    });

    var url_topAutors = base_url_primavera + '/TopAutores';
    $('#topautores-container').html(botao_loadTopAutores);
    $.ajax({
        url: url_topAutors,
        error: function(err) {
            console.log("error fetching top.");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#topautores-container').html('');
            for(var  i in data){
                console.log("com parse");

                top[i] = data[i];
                var autorCod = top[i].CodAutor;

                console.log(data);

                var top_element = '<a class="btn btn-primary" style="width: 100%; height: 60px; background-color: #555555; border-color:#fff ;color: white;" href="/autor/' + autorCod + '"> <p></p>' + desc;

                $('#topautores-container').append(top_element);
            }

        },
        type: 'GET'
    });

    console.log("entrei");
    var url_bestDeals = base_url_primavera + '/ArtigosDesconto';
    $('#bestdeals-container').html(botao_loadBestDeals);
    $.ajax({
        url: url_bestDeals,
        error: function(err) {
            console.log("error fetching top.");
            console.log(err);
        },
        dataType: 'json',
        success: function(data) {

            $('#bestdeals-container').html('');
            for(var  i in data){

                top[i] = data[i];

                console.log(data);

                var top_element = '<a class="btn btn-primary" style="width: 100%; height: 60px; background-color: #555555; border-color:#fff ;color: white;" href="/product/' + top[i].CodArtigo + '"> <p></p>' + desc;

                $('#bestdeals-container').append(top_element);
            }

        },
        type: 'GET'
    });


});
