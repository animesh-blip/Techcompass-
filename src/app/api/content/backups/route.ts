import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import path from "path";
import globalTokenStore from "@/lib/token-store";

const BACKUP_DIR = path.join(process.cwd(), "content", "backups");

export async function GET(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!token || !globalTokenStore.has(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    await fs.mkdir(BACKUP_DIR, { recursive: true });
    const files = await fs.readdir(BACKUP_DIR);
    const backups = files
      .filter((f) => f.endsWith(".json"))
      .sort()
      .reverse()
      .slice(0, 10)
      .map((f) => {
        const match = f.match(/site-content-(\d{4})-(\d{2})-(\d{2})T(\d{2})-(\d{2})-(\d{2})/);
        const label = match
          ? `${match[1]}-${match[2]}-${match[3]} ${match[4]}:${match[5]}:${match[6]}`
          : f;
        return { filename: f, label };
      });
    return NextResponse.json(backups);
  } catch {
    return NextResponse.json([], { status: 200 });
  }
}

export async function POST(request: Request) {
  const authHeader = request.headers.get("authorization");
  const token = authHeader?.replace("Bearer ", "");
  if (!token || !globalTokenStore.has(token)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { filename } = await request.json();
    if (!filename || filename.includes("..") || !filename.endsWith(".json")) {
      return NextResponse.json({ error: "Invalid filename" }, { status: 400 });
    }

    const backupPath = path.join(BACKUP_DIR, filename);
    const contentPath = path.join(process.cwd(), "content", "site-content.json");

    const backupData = await fs.readFile(backupPath, "utf-8");
    JSON.parse(backupData); // Validate it's valid JSON

    // Save current as backup before restoring
    const current = await fs.readFile(contentPath, "utf-8");
    const timestamp = new Date().toISOString().replace(/[:.]/g, "-");
    await fs.writeFile(
      path.join(BACKUP_DIR, `site-content-${timestamp}.json`),
      current,
      "utf-8"
    );

    await fs.writeFile(contentPath, backupData, "utf-8");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to restore backup" }, { status: 500 });
  }
}
