using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class populatecategories : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
         migrationBuilder.Sql(@"INSERT INTO Categories (Name)VALUES ('Health')");
         migrationBuilder.Sql(@"INSERT INTO Categories (Name)VALUES ('Sport')");
         migrationBuilder.Sql(@"INSERT INTO Categories (Name)VALUES ('Beauty')");

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {

        }
    }
}
