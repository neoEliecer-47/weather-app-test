import { paramsFirstRender } from "@/constants";
import { NextRequest, NextResponse } from "next/server";

const { lat, lon, country } = paramsFirstRender
export function middleware(req: NextRequest){
    const url = req.nextUrl

    if(!url.searchParams.has('lat')){
        url.searchParams.set('lat', lat)
        url.searchParams.set('lon', lon)
        url.searchParams.set('country', country)
        
       if(url.pathname === '/') return NextResponse.redirect(url)
    }

    return NextResponse.next()
}