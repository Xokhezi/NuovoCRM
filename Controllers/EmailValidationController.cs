using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{
    [Route("api/validation")]
    public class EmailValidationController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public IConfiguration _config { get; }
        public EmailValidationController(NuovoCRMDbContext context, IMapper mapper, IConfiguration config)
        {
            this._config = config;
            this.mapper = mapper;
            this.context = context;

        }

        [HttpPost]
        public async Task<IActionResult> ValidateUser([FromBody] SecurePartnerQuery query)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model is Invalid");
            var user = await context.Users.SingleOrDefaultAsync(u => u.Email == query.Email);
            if (user != null)
                return Ok(true);
            else
                return Ok(false);
        }
    }
}