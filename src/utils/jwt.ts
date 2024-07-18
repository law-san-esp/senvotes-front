import { jwtDecode } from "jwt-decode";

interface DecodedToken {
  user: {
    id: string;
    email: string;
    full_name: string;
    role: string;
  };
  exp: number;
}

export const decodeToken = (token: string): DecodedToken | null => {
  try {
    const decoded =  jwtDecode<DecodedToken>(token);
    console.log('Decoded token', decoded);
    return decoded;
  } catch (error) {
    console.error('Invalid token', error);
    return null;
  }
};
