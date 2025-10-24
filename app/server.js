import app from "./app.js";

const PORT = process.env.PORT || 3000;
const server = app.listen(PORT, () => {
  // listo
});

// cierre elegante si se desea reutilizar
process.on("SIGTERM", () => server.close(() => process.exit(0)));
process.on("SIGINT", () => server.close(() => process.exit(0)));
