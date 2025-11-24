import { NextResponse } from "next/server";
import { promises as fs } from "node:fs";
import path from "node:path";

export async function GET() {
  const iconPath = path.join(process.cwd(), "public", "favicon.svg");
  const svg = await fs.readFile(iconPath, "utf8");

  return new NextResponse(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}

