package router

import (
	"be_latihan/handler"
	"be_latihan/model"

	"github.com/gofiber/fiber/v2"
)

func SetupRoutes(app *fiber.App) {
	app.Get("/", func(c *fiber.Ctx) error {
		return c.JSON(model.Response{
			Message: "api be_latihan aktif",
		})
	})

	mahasiswa := app.Group("/api/mahasiswa")
	mahasiswa.Get("/", handler.GetAllMahasiswa)
	mahasiswa.Get("/:npm", handler.GetMahasiswaByNpm)

	//jika menggunakan parameter mhs
	mahasiswa.Get("/search", handler.GetMahasiswaByNpm)
	mahasiswa.Post("/", handler.InsertMahasiswa)
	mahasiswa.Put("/:npm", handler.UpdateMahasiswa)
	mahasiswa.Delete("/:npm", handler.DeleteMahasiswa)
}
