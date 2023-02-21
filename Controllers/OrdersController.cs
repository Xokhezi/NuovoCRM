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
    [Route("api/orders")]
    [Authorize(AuthenticationSchemes = JwtBearerDefaults.AuthenticationScheme)]
    public class OrdersController : Controller
    {
        public NuovoCRMDbContext context { get; }
        private readonly IMapper mapper;
        public IConfiguration _config { get; }
        public OrdersController(NuovoCRMDbContext context, IMapper mapper, IConfiguration config)
        {
            this._config = config;
            this.mapper = mapper;
            this.context = context;

        }

        [HttpGet]
        public async Task<IEnumerable<OrderResource>> GetOrders()
        {
            var orders = await context.Orders.ToListAsync();
            return mapper.Map<IEnumerable<Order>, IEnumerable<OrderResource>>(orders);
        }
        [HttpGet("{id}")]
        public async Task<OrderResource> GetOrder(int id)
        {
            var order = await context.Orders.SingleOrDefaultAsync(u => u.Id == id);
            return mapper.Map<Order, OrderResource>(order);
        }
        [HttpPost]
        public async Task<IActionResult> CreateOrder([FromBody] OrderResource orderResource)
        {
            if (!ModelState.IsValid)
                return BadRequest("Model is Invalid");
            var order = mapper.Map<OrderResource, Order>(orderResource);
            context.Orders.Add(order);
            await context.SaveChangesAsync();
            return Ok(order.Id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateOrder([FromBody] OrderResource orderResource, int Id)
        {
            if (!ModelState.IsValid)
                return NotFound(ModelState);

            var order = await context.Orders.SingleOrDefaultAsync(p => p.Id == Id);
            var resource = mapper.Map<OrderResource, Order>(orderResource);

            await context.SaveChangesAsync();

            order.Email = resource.Email;
            order.FullName = resource.FullName;
            order.PlacedOn = resource.PlacedOn;
            order.Adress = resource.Adress;
            order.OrderList = resource.OrderList;
            order.Phone = resource.Phone;
            order.Status = resource.Status;
            order.TotalPrize = resource.TotalPrize;
            order.OrderNumber = resource.OrderNumber;
            order.CheckedByCustomer = resource.CheckedByCustomer;

            await context.SaveChangesAsync();

            return Ok(resource);

        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteOrder(int id)
        {

            var order = await context.Orders.SingleOrDefaultAsync(o => o.Id == id);
            if (order == null)
                return NotFound();
            context.Remove(order);
            await context.SaveChangesAsync();

            return Ok();
        }
    }
}