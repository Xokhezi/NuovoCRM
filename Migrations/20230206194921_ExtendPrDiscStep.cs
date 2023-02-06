using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class ExtendPrDiscStep : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "DiscountStep",
                table: "Products",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountStep",
                table: "Products");
        }
    }
}
