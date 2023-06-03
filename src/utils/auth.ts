import { verify } from "jsonwebtoken";

function getUserIdFromToken(token: string | undefined): string {
  if (!token) {
    throw new Error("Token not provided");
  }

  try {
    const decodedToken = verify(token, process.env.JWT_SECRET) as { sub: string };
    return decodedToken.sub;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

export { getUserIdFromToken };
