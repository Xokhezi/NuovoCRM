using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class registrationexpanded : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "LeadSurname",
                table: "RegistrationRequests",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "LeadSurname",
                table: "RegistrationRequests");
        }
    }
}
