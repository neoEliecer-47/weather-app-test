import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const query = req.nextUrl.searchParams; //params to get the country
  const lat = query.get("lat");
  const lon = query.get("lon");

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=hourly,daily,minutely,alerts&appid=${process.env.NEXT_PUBLIC_API_KEY}`,{
        method: 'GET',
        cache: 'no-store'
      }
    );
    if (!response)
      throw new Error(`The Request failed due to an issue in the external api`); //error handling

    const data = await response.json();

    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    //error handling
    if (error instanceof Error) {
      console.error("Something happened in the server", error.message);
      return NextResponse.json({
        error: error.message,
        status: 500,
      });
    }
  }
}
