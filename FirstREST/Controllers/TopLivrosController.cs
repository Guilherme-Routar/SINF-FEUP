using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Net.Http;
using System.Web.Http;
using FirstREST.Lib_Primavera.Model;
using System.Web.Script.Serialization;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstREST.Lib_Primavera.Model;
using FirstREST.IP;


namespace FirstREST.Controllers
{
    public class TopLivrosController : ApiController
    {

        //
        // GET: /Artigos/

        public IEnumerable<Lib_Primavera.Model.Artigo> Get()
        {
            return Lib_Primavera.PriIntegration.ListaTopLivros();
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
                return artigo;
            }
        }

        [System.Web.Http.HttpGet]
        public HttpResponseMessage Top(string number)
        {
            List<Lib_Primavera.Model.Artigo> artigos = Lib_Primavera.PriIntegration.ListaTopLivros();
            if (artigos == null)
            {
                return Request.CreateResponse(HttpStatusCode.Forbidden);
            }
            else
            {
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", IP.LocalhostIP.localhostIP());
                var json = new JavaScriptSerializer().Serialize(artigos);
                var response = Request.CreateResponse(HttpStatusCode.OK, json);
                return response;
            }

        }

    }
}
