using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using NuovoCRM.Models;

namespace NuovoCRM.Controllers.Persistence
{
    public class NuovoCRMDbContext : DbContext
    {
        public NuovoCRMDbContext(DbContextOptions<NuovoCRMDbContext> options) : base(options)
        {
        }
        public DbSet<Partner> Partners { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<User> Users { get; set; }
    }
}
