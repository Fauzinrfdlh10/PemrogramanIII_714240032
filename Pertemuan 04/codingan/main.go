package main

import (
	"be_latihan/config"
	"be_latihan/model"

	"github.com/gofiber/fiber/v2"
)

func main() {
	app := fiber.New()
	config.InitDB()
	config.GetDB().AutoMigrate(&model.Mahasiswa{})

	app.Get("/", func(c *fiber.Ctx) error {
		return c.SendString("Hello, World!")
	})

	app.Listen(":3000")
}
