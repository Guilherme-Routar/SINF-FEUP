using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstREST.Lib_Primavera.Model;

namespace FirstREST.Controllers
{
    public class AutorController : ApiController
    {
        public IEnumerable<Lib_Primavera.Model.Autor> Get()
        {
            return Lib_Primavera.PriIntegration.ListaAutores();
        }


        // GET api/artigo/5    
        public Autor Get(string id)
        {
            Lib_Primavera.Model.Autor autor = Lib_Primavera.PriIntegration.GetAutor(id);
            if (autor == null)
            {
                throw new HttpResponseException(
                  Request.CreateResponse(HttpStatusCode.NotFound));
            }
            else
            {
                return autor;
            }
        }
    }
}
