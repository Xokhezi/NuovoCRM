using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using NuovoCRM.Controllers.Persistence;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers
{
    [Route("api/auth")]
    public class LoginController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public IConfiguration _config { get; }
        public LoginController(NuovoCRMDbContext context, IMapper mapper, IConfiguration config)
        {
            this._config = config;
            this.mapper = mapper;
            this.context = context;

        }
        private JwtSecurityToken GetJwtSecurityToken(User user)
        {
            var claims = new[]
                {
                    new Claim("Email",user.Email)
                };

            string privateKey = "testkeyvalidator-123456789";
            var symmetricKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(privateKey));
            var credentials = new SigningCredentials(symmetricKey, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken
            (
                 issuer: "ISSUER_NAME",
                 audience: "AUDIENCE",
                 claims: claims,
                 signingCredentials: credentials
            );
            return token;
        }

        [HttpPost]
        public IActionResult Login([FromBody] User user)
        {
            var existingUser = context.Users.SingleOrDefault(u => u.Email == user.Email);

            if (existingUser == null)
                return Unauthorized("Uživatel neexistuje");
            if (existingUser.Password == user.Password)
            {
                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(GetJwtSecurityToken(user))
                });
            }
            else
                return Unauthorized();
        }


    }
}