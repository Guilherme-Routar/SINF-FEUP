using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Script.Serialization;
using FirstREST.Lib_Primavera.Model;
using FirstREST.IP;
using ADODB;



namespace FirstREST.Controllers
{
    public class ArtigosController : ApiController
    {
        //
        // GET: /Artigos/

        public IEnumerable<Lib_Primavera.Model.Artigo> Get()
        {
            return Lib_Primavera.PriIntegration.ListaArtigos();


        }


        // GET api/artigo/5    
        public Artigo Get(string id)
        {
            Lib_Primavera.Model.Artigo artigo = Lib_Primavera.PriIntegration.GetArtigo(id);
            if (artigo == null)
            {
                throw new HttpResponseException(
                  Request.CreateResponse(HttpStatusCode.NotFound));
            }
            else
            {
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                return artigo;
            }
        }

        [System.Web.Http.HttpPost]
        public HttpResponseMessage Categoria(string id)
        {
            List<Artigo> produtosCategoria = Lib_Primavera.PriIntegration.GetArtigosCategoria(id);
            if (produtosCategoria == null)
            {
                return Request.CreateResponse(HttpStatusCode.Forbidden);
            }
            else
            {
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                var json = new JavaScriptSerializer().Serialize(produtosCategoria);
                var response = Request.CreateResponse(HttpStatusCode.OK, json);
                return response;
            }
        }

        [System.Web.Http.HttpPost]
        public HttpResponseMessage Autor(string id)
        {
            List<Artigo> produtosAutor = Lib_Primavera.PriIntegration.GetArtigosAutor(id);
            if (produtosAutor == null)
            {
                return Request.CreateResponse(HttpStatusCode.Forbidden);
            }
            else
            {
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                var json = new JavaScriptSerializer().Serialize(produtosAutor);
                var response = Request.CreateResponse(HttpStatusCode.OK, json);
                return response;
            }
        }

    }
}

