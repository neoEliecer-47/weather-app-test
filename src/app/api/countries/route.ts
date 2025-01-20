import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {

    //countries allowed
    
   try {
    const response = await fetch("https://restcountries.com/v3.1/all");
   
    if (!response)
        throw new Error(`The Request failed due to an issue in the external api`); //error handling
  
      const data = await response.json();
  
      return NextResponse.json(data, { status: 200 }); //code 200 ok
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(
        "something happened trying to get the countries data",
        error.message
      );
    }
  }
  
}
