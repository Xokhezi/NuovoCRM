using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace NuovoCRM.Migrations
{
    /// <inheritdoc />
    public partial class coupon : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
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

            migrationBuilder.AddColumn<int>(
                name: "CouponId",
                table: "Users",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Coupon",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DiscountPrimary = table.Column<int>(type: "int", nullable: false),
                    DiscountSecondary = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Coupon", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_CouponId",
                table: "Users",
                column: "CouponId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Coupon_CouponId",
                table: "Users",
                column: "CouponId",
                principalTable: "Coupon",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Coupon_CouponId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Coupon");

            migrationBuilder.DropIndex(
                name: "IX_Users_CouponId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "CouponId",
                table: "Users");

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
        }
    }
}
