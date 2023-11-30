import { PassportSerializer } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { User } from "@prisma/client";
//import { User } from "../auth.service"

@Injectable()
export class SessionSerializer extends  PassportSerializer {

    serializeUser(user: User, done: (err: Error, user: User) => void){
        done(null, user);
    }

    deserializeUser(payload: any,  done: (err: Error, user: User) => void) {
         done(null, payload)
    }

}