using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Controllers.Resources;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{
    [Route("api/users")]
    public class UsersController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public IConfiguration _config { get; }
        public UsersController(NuovoCRMDbContext context, IMapper mapper, IConfiguration config)
        {
            this._config = config;
            this.mapper = mapper;
            this.context = context;

        }
        [HttpGet]
        public async Task<IEnumerable<UserResource>> GetUsers()
        {
            var users = await context.Users.ToListAsync();
            return mapper.Map<IEnumerable<User>, IEnumerable<UserResource>>(users);
        }

        [HttpPost]
        public async Task<IActionResult> Register([FromBody] UserResource userResource)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model is Invalid");
            var user = mapper.Map<UserResource, User>(userResource);
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return Ok();
        }
    }
}