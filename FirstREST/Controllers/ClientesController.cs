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
    public class ClientesController : ApiController
    {
        //
        // GET: /Clientes/

        public IEnumerable<Lib_Primavera.Model.Cliente> Get()
        {
                return Lib_Primavera.PriIntegration.ListaClientes();
        }


        // GET api/cliente/5    
        public Cliente Get(string id)
        {
            Lib_Primavera.Model.Cliente cliente = Lib_Primavera.PriIntegration.GetCliente(id);
            if (cliente == null)
            {
                throw new HttpResponseException(
                        Request.CreateResponse(HttpStatusCode.NotFound));

            }
            else
            {
                return cliente;
            }
        }


        public HttpResponseMessage Post(Lib_Primavera.Model.Cliente cliente)
        {
            Lib_Primavera.Model.RespostaErro erro = new Lib_Primavera.Model.RespostaErro();
            erro = Lib_Primavera.PriIntegration.InsereClienteObj(cliente);

            if (erro.Erro == 0)
            {
                var response = Request.CreateResponse(
                   HttpStatusCode.Created, cliente);
                string uri = Url.Link("DefaultApi", new { CodCliente = cliente.CodCliente });
                response.Headers.Location = new Uri(uri);
                return response;
            }

            else
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            }

        }


        public HttpResponseMessage Put(string id, Lib_Primavera.Model.Cliente cliente)
        {

            Lib_Primavera.Model.RespostaErro erro = new Lib_Primavera.Model.RespostaErro();

            try
            {
                erro = Lib_Primavera.PriIntegration.UpdCliente(cliente);
                if (erro.Erro == 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, erro.Descricao);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, erro.Descricao);
                }
            }

            catch (Exception exc)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, erro.Descricao);
            }
        }



        public HttpResponseMessage Delete(string id)
        {


            Lib_Primavera.Model.RespostaErro erro = new Lib_Primavera.Model.RespostaErro();

            try
            {

                erro = Lib_Primavera.PriIntegration.DelCliente(id);

                if (erro.Erro == 0)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, erro.Descricao);
                }
                else
                {
                    return Request.CreateResponse(HttpStatusCode.NotFound, erro.Descricao);
                }

            }

            catch (Exception exc)
            {
                return Request.CreateResponse(HttpStatusCode.BadRequest, erro.Descricao);

            }

        }

        // api/clientes/id/encomendas
      public HttpResponseMessage Get(string id, string encomendas)
        {
            if (encomendas.Equals("encomendas"))
            {
                IEnumerable<Lib_Primavera.Model.DocVenda> listaEncomendas = Lib_Primavera.PriIntegration.getEncomendasCliente(id);

                if (listaEncomendas == null)
                {
                    var response = Request.CreateResponse(HttpStatusCode.NotFound);
                    return response;
                }
                else
                {
                    HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                    var json = new JavaScriptSerializer().Serialize(listaEncomendas);
                    var response = Request.CreateResponse(HttpStatusCode.OK, json);
                    return response;
                }
            }
            else
            {
                throw new HttpResponseException(
                Request.CreateResponse(HttpStatusCode.Ambiguous));
            }
        }


       
        // api/clientes/id/encomendas/id_encomenda
        [System.Web.Http.HttpGet]
        public HttpResponseMessage GetEncomenda(string idCliente, string idEncomenda)
        {

            Lib_Primavera.Model.DocVenda encomenda = Lib_Primavera.PriIntegration.getEncomendaCliente(idCliente, idEncomenda);

            if (encomenda == null)
            {
                var response = Request.CreateResponse(HttpStatusCode.NotFound);
                return response;
            }
            else
            {
                HttpContext.Current.Response.AddHeader("Access-Control-Allow-Origin", LocalhostIP.localhostIP());
                var json = new JavaScriptSerializer().Serialize(encomenda);
                var response = Request.CreateResponse(HttpStatusCode.OK, json);
                return response;
            }


        }


    }
}
