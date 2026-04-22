import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { bouquets } from "@/schema";
import { eq } from "drizzle-orm";

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const numId = parseInt(id, 10);

    if (isNaN(numId)) {
      return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
    }

    const [bouquet] = await db
      .select()
      .from(bouquets)
      .where(eq(bouquets.id, numId))
      .limit(1);

    if (!bouquet) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }

    return NextResponse.json(bouquet);
  } catch (err) {
    console.error("Error fetching bouquet:", err);
    return NextResponse.json(
      { error: "Failed to fetch bouquet" },
      { status: 500 },
    );
  }
}
