using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class extendorderwithcheck : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "CheckedByCustomer",
                table: "Orders",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "CheckedByCustomer",
                table: "Orders");
        }
    }
}
