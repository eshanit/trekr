import { AuthService } from './auth.service';
import { AuthDto } from './dto';
import { Response } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(dto: AuthDto): Promise<boolean>;
    signin(dto: AuthDto): Promise<any>;
    signout(req: any, res: Response, next: any): Promise<any>;
    profile(dto: AuthDto): {
        msq: string;
        user: AuthDto;
    };
}
