import { NextRequest, NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import globalTokenStore from "@/lib/token-store";
import { validateSiteContent } from "@/lib/validate-content";

const CONTENT_FILE = path.join(process.cwd(), "content", "site-content.json");

export async function GET() {
  try {
    const data = await fs.readFile(CONTENT_FILE, "utf-8");
    return NextResponse.json(JSON.parse(data));
  } catch {
    return NextResponse.json({ error: "Failed to read content" }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || !globalTokenStore.has(token)) {
      return NextResponse.json({ error: "Session expired. Please log in again." }, { status: 401 });
    }

    const body = await request.json();

    // Validate content structure
    const validation = validateSiteContent(body);
    if (!validation.valid) {
      return NextResponse.json(
        { error: "Validation failed", details: validation.errors },
        { status: 400 }
      );
    }

    // Create a backup before saving
    try {
      const existing = await fs.readFile(CONTENT_FILE, "utf-8");
      const backupDir = path.join(process.cwd(), "content", "backups");
      await fs.mkdir(backupDir, { recursive: true });
      const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
      await fs.writeFile(
        path.join(backupDir, `site-content-${timestamp}.json`),
        existing,
        "utf-8"
      );
      // Keep only last 10 backups
      const backups = await fs.readdir(backupDir);
      const sorted = backups.sort().reverse();
      for (const old of sorted.slice(10)) {
        await fs.unlink(path.join(backupDir, old));
      }
    } catch {
      // Backup failure shouldn't block save
    }

    // Atomic write: write to temp file then rename
    const tmpFile = CONTENT_FILE + ".tmp";
    await fs.writeFile(tmpFile, JSON.stringify(body, null, 2), "utf-8");
    await fs.rename(tmpFile, CONTENT_FILE);

    return NextResponse.json({ success: true });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to save content";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
