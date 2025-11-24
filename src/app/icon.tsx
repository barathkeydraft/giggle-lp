import { promises as fs } from "node:fs";
import path from "node:path";

export const contentType = "image/svg+xml";

export default async function Icon() {
  const svgPath = path.join(process.cwd(), "public", "favicon.svg");
  const svg = await fs.readFile(svgPath, "utf8");

  return new Response(svg, {
    headers: {
      "Content-Type": contentType,
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

