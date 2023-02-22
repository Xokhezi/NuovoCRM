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
    [Route("api/categories")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class CategoriesController
    {


        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public IConfiguration _config { get; }
        public CategoriesController(NuovoCRMDbContext context, IMapper mapper, IConfiguration config)
        {
            this._config = config;
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<CategoryResource>> GetCategories()
        {
            var categories = await context.Categories.ToListAsync();
            return mapper.Map<IEnumerable<Category>, IEnumerable<CategoryResource>>(categories);
        }
        [HttpGet("{id}")]
        public async Task<CategoryResource> GetCategory(int id)
        {
            var category = await context.Categories.SingleOrDefaultAsync(u => u.Id == id);
            return mapper.Map<Category, CategoryResource>(category);
        }        
       
    }
}
