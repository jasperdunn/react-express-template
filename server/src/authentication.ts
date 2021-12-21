import { sign } from 'jsonwebtoken';

export function generateJWT(username: string): string {
  return sign({ username }, process.env.TOKEN_SECRET as string, {
    expiresIn: '10s',
  });
}
