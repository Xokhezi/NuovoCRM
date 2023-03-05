using System;
using System.Collections.Generic;
using System.Linq;
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

    [Route("api/registration")]
    public class RegistraionRequestsController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public RegistraionRequestsController(NuovoCRMDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }
        [HttpGet]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IEnumerable<RegistrationRequestResource>> GetRegistrations()
        {
            var requests = await context.RegistrationRequests.ToListAsync();
            return mapper.Map<IEnumerable<RegistrationRequest>, IEnumerable<RegistrationRequestResource>>(requests);
        }
        [HttpGet("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> GetRegistration(int id)
        {
            var request = await context.RegistrationRequests.SingleOrDefaultAsync(p => p.Id == id);
            var requestResource = mapper.Map<RegistrationRequest, RegistrationRequestResource>(request);

            return Ok(requestResource);
        }
        [HttpPost]
        public async Task<IActionResult> CreateRegistration([FromBody] RegistrationRequestResource registration)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model Invalid");

            var newRegistration = mapper.Map<RegistrationRequestResource, RegistrationRequest>(registration);
            context.Add(newRegistration);
            await context.SaveChangesAsync();

            return Ok();
        }
        [HttpPut("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> UpdateRegistration([FromBody] RegistrationRequestResource registrationResource, int Id)
        {
            if (!ModelState.IsValid)
                return NotFound(ModelState);

            var registration = await context.RegistrationRequests.SingleOrDefaultAsync(p => p.Id == Id);
            var resource = mapper.Map<RegistrationRequestResource, RegistrationRequest>(registrationResource);

            await context.SaveChangesAsync();

            registration.Name = resource.Name;
            registration.Surname = resource.Surname;
            registration.Email = resource.Email;
            registration.Phone = resource.Phone;
            registration.Password = resource.Password;
            registration.Position = resource.Position;
            registration.Adress = resource.Adress;
            registration.Country = resource.Country;            
            registration.LeadId = resource.LeadId;
            

            await context.SaveChangesAsync();

            return Ok(resource);

        }
        [HttpDelete("{id}")]
        [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
        public async Task<IActionResult> DeleteRegistration(int id)
        {

            var registration = await context.RegistrationRequests.SingleOrDefaultAsync(p => p.Id == id);
            if (registration == null)
                return NotFound();
            context.Remove(registration);
            await context.SaveChangesAsync();

            return Ok();
        }
    }

}
