using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Controllers.Resources;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{
    
    [Route("api/partners")]
    public class PartnersController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public PartnersController(NuovoCRMDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;
            
        }
        [HttpGet]
        public async Task<IEnumerable<PartnerResource>> GetPartners()
        {
            var partners = await context.Partners.ToListAsync();
            return mapper.Map<IEnumerable<Partner>, IEnumerable<PartnerResource>>(partners);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetPartner(int id)
        {
            var partner = await context.Partners.SingleOrDefaultAsync(p => p.Id == id);
            var partnerResource = mapper.Map<Partner, PartnerResource>(partner);

            return Ok(partnerResource);
        }
        [HttpPost]
        public async Task<IActionResult> CreatePartner([FromBody] PartnerResource partner)
        {
            if(!ModelState.IsValid)
             return BadRequest("Model Invalid");
            
            var newPartner=mapper.Map<PartnerResource,Partner>(partner);
            context.Add(newPartner);
            await context.SaveChangesAsync();

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeletePartner(int id)
        {

            var partner =await context.Partners.SingleOrDefaultAsync(p=>p.Id==id);
            if(partner==null)
                return NotFound();
            context.Remove(partner);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}