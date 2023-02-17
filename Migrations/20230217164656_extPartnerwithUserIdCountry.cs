using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class extPartnerwithUserIdCountry : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Country",
                table: "Partners",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "UserId",
                table: "Partners",
                type: "int",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Country",
                table: "Partners");

            migrationBuilder.DropColumn(
                name: "UserId",
                table: "Partners");
        }
    }
}
