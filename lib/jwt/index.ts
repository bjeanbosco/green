import jwt from 'jsonwebtoken';
import User from '@/src/types/user';

export function decodeToken(token: string) {
    return jwt.decode(token) as User;
}