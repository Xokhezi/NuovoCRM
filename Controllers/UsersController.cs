using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Controllers.Resources;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{
    [Route("api/users")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
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
        [HttpGet("{id}")]
        public async Task<UserResource> GetUser(int id)
        {
            var user = await context.Users.SingleOrDefaultAsync(u => u.Id == id);
            return mapper.Map<User, UserResource>(user);
        }
        [HttpPost]
        public async Task<IActionResult> Register([FromBody] UserResource userResource)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model is Invalid");
            var user = mapper.Map<UserResource, User>(userResource);
            context.Users.Add(user);
            await context.SaveChangesAsync();
            return Ok(user.Id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser([FromBody] UserResource userResource, int Id)
        {
            if (!ModelState.IsValid)
                return NotFound(ModelState);

            var user = await context.Users.SingleOrDefaultAsync(p => p.Id == Id);
            var resource = mapper.Map<UserResource, User>(userResource);

            await context.SaveChangesAsync();

            user.Email = resource.Email;
            user.FullName = resource.FullName;
            user.Role = resource.Role;
            user.Adress = resource.Adress;
            user.Country = resource.Country;
            user.Password = resource.Password;
            user.Phone = resource.Phone;
            user.DiscountCode = resource.DiscountCode;
            user.DiscountPrimary = resource.DiscountPrimary;
            user.DiscountSecondary = resource.DiscountSecondary;

            await context.SaveChangesAsync();

            return Ok(resource);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {

            var user = await context.Users.SingleOrDefaultAsync(u => u.Id == id);
            if (user == null)
                return NotFound();
            context.Remove(user);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}