import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";
import { bouquets } from "@/schema";
import { nanoid } from "nanoid";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { mode, flowers, letter, greenery, flowerOrder, timestamp } = body;

    const short_id = nanoid(8);

    const [row] = await db
      .insert(bouquets)
      .values({
        short_id,
        mode,
        flowers,
        letter,
        greenery,
        flowerOrder,
        timestamp,
      })
      .returning();

    return NextResponse.json({ id: row.id, short_id: row.short_id });
  } catch (err) {
    console.error("Error creating bouquet:", err);
    return NextResponse.json(
      { error: "Failed to create bouquet" },
      { status: 500 },
    );
  }
}

export async function GET() {
  try {
    const rows = await db.query.bouquets.findMany({
      orderBy: (bouquets, { desc }) => [desc(bouquets.created_at)],
    });
    return NextResponse.json(rows);
  } catch (err) {
    console.error("Error fetching bouquets:", err);
    return NextResponse.json(
      { error: "Failed to fetch bouquets" },
      { status: 500 },
    );
  }
}
