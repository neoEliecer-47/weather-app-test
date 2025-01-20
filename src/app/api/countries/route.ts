import { NextResponse } from "next/server";

export async function GET() {

    //countries allowed
    
   try {
    const response = await fetch("https://restcountries.com/v3.1/all?fields=name,latlng");
  
      const data = await response.json()
  
      return NextResponse.json(data); //code 200 ok
  } catch (error: unknown) {
    if (error instanceof Error) {
        console.error("Something happened in the server", error.message);
        return NextResponse.json({
          error: error.message,
          status: 500,
        });
    }
  }
  
}
