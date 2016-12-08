using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstREST.IP;
using FirstREST.Lib_Primavera.Model;

namespace FirstREST.Controllers
{
    public class ListaCategoriasController : ApiController
    {
        public IEnumerable<Lib_Primavera.Model.Categoria> Get()
        {
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
            return Lib_Primavera.PriIntegration.ListaCategorias();
        }


        // GET api/artigo/5    
        public Categoria Get(string id)
        {
            Lib_Primavera.Model.Categoria cat = Lib_Primavera.PriIntegration.GetCategoria(id);
            if (cat == null)
            {
                throw new HttpResponseException(
                  Request.CreateResponse(HttpStatusCode.NotFound));
            }
            else
            {
                return cat;
            }
        }
    }
}
