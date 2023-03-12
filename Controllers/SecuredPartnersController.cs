using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Controllers.Resources;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{

    [Route("api/partners/secure")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class SecuredPartnersController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public SecuredPartnersController(NuovoCRMDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
        }
        [HttpPost]
        public async Task<IActionResult> GetSecuredPartner([FromBody] SecurePartnerQuery query)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model Invalid");

            var singlePartner = await context.Partners.SingleOrDefaultAsync(p => p.Email == query.Email);
            var resource = mapper.Map<Partner, PartnerResource>(singlePartner);
            return Ok(resource);
        }
    }
}