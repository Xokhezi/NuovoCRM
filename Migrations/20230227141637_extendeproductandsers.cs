using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class extendeproductandsers : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "DiscountCode",
                table: "Users",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "DiscountPrimary",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "DiscountSecondary",
                table: "Users",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<string>(
                name: "Type",
                table: "Products",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DiscountCode",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DiscountPrimary",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "DiscountSecondary",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "Type",
                table: "Products");
        }
    }
}
