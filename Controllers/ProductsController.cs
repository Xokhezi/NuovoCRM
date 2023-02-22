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
     [Route("api/products")]
     [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class ProductsController : Controller
    {    
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public ProductsController(NuovoCRMDbContext context, IMapper mapper)
        {
            this.mapper = mapper;
            this.context = context;

        }
        [HttpGet]
        public async Task<IEnumerable<ProductResource>> GetProducts()
        {
            var products = await context.Products.ToListAsync();
            return mapper.Map<IEnumerable<Product>, IEnumerable<ProductResource>>(products);
        }
        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            var product = await context.Products.SingleOrDefaultAsync(p => p.Id == id);
            var productResource = mapper.Map<Product, ProductResource>(product);

            return Ok(productResource);
        }
        [HttpPost]
        public async Task<IActionResult> CreateProduct([FromBody] ProductResource product)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model Invalid");

            var newProduct = mapper.Map<ProductResource, Product>(product);
            context.Add(newProduct);
            await context.SaveChangesAsync();


            return Ok();
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateProduct([FromBody] ProductResource productResource,int Id)
        {
            if (!ModelState.IsValid)
                return NotFound(ModelState);

            var product = await context.Products.SingleOrDefaultAsync(p => p.Id == Id);
            var resource = mapper.Map<ProductResource, Product>(productResource);

            await context.SaveChangesAsync();

            product.Name = resource.Name;
            product.Prize = resource.Prize;
            product.Discount = resource.Discount;
            product.DiscountStep = resource.DiscountStep;
            product.ProductCode = resource.ProductCode;
            product.Url = resource.Url;
            product.Description=resource.Description;
            product.Categories=resource.Categories;            

            await context.SaveChangesAsync();

            return Ok(resource);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {

            var product = await context.Products.SingleOrDefaultAsync(p => p.Id == id);
            if (product == null)
                return NotFound();
            context.Remove(product);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
    }
