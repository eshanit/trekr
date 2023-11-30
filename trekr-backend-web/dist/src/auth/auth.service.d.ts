import { PrismaService } from 'prisma/prisma.service';
import { UsersService } from 'src/users/users.service';
import { AuthDto } from './dto';
export declare class AuthService {
    private prisma;
    private users;
    [x: string]: any;
    constructor(prisma: PrismaService, users: UsersService);
    hashData: (data: string) => Promise<string>;
    signup(dto: AuthDto): Promise<boolean>;
    signin(dto: AuthDto): Promise<any>;
    signout(req: any, res: any, next: any): Promise<any>;
    validateUser(email: string, pass: string): Promise<any>;
}
