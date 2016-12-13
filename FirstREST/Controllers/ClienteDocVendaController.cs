using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using FirstREST.Lib_Primavera.Model;
using FirstREST.IP;
using System.Web.Script.Serialization;

namespace FirstREST.Controllers
{
    public class ClienteDocVendaController : ApiController
    {
        public IEnumerable<Lib_Primavera.Model.DocVenda> Get(string id)
        {
            HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
            return Lib_Primavera.PriIntegration.Encomendas_List(id);
        }
    }
}
