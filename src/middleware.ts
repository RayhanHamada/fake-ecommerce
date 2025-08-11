import { MiddlewareConfig, NextMiddleware, NextResponse } from "next/server";

export const middleware: NextMiddleware = async function (_req, _event) {
  // TODO: handle authentication

  return NextResponse.next();
};

export const config: MiddlewareConfig = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
