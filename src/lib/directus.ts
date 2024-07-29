import { createDirectus, rest, staticToken } from "@directus/sdk";

const directus = createDirectus(
  process.env.BACKEND_URL || "localhost:4000"
).with(staticToken(process.env.BACKEND_TOKEN || ""))
.with(rest());


export default directus;