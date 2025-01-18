import { paramsFirstRender } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

const { lat, lon } = paramsFirstRender;
export function middleware(req: NextRequest) {
  const url = req.nextUrl;

  if (!url.searchParams.has("lat")) {
    url.searchParams.set("lat", lat);

    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
