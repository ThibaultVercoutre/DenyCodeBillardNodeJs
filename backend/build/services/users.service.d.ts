/// <reference types="mongoose/types/aggregate.js" />
/// <reference types="mongoose/types/callback.js" />
/// <reference types="mongoose/types/collection.js" />
/// <reference types="mongoose/types/connection.js" />
/// <reference types="mongoose/types/cursor.js" />
/// <reference types="mongoose/types/document.js" />
/// <reference types="mongoose/types/error.js" />
/// <reference types="mongoose/types/expressions.js" />
/// <reference types="mongoose/types/helpers.js" />
/// <reference types="mongoose/types/middlewares.js" />
/// <reference types="mongoose/types/indexes.js" />
/// <reference types="mongoose/types/models.js" />
/// <reference types="mongoose/types/mongooseoptions.js" />
/// <reference types="mongoose/types/pipelinestage.js" />
/// <reference types="mongoose/types/populate.js" />
/// <reference types="mongoose/types/query.js" />
/// <reference types="mongoose/types/schemaoptions.js" />
/// <reference types="mongoose/types/schematypes.js" />
/// <reference types="mongoose/types/session.js" />
/// <reference types="mongoose/types/types.js" />
/// <reference types="mongoose/types/utility.js" />
/// <reference types="mongoose/types/validation.js" />
/// <reference types="mongoose/types/virtuals.js" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype.js" />
import { IUser } from "../models/users.model.js";
export declare const getUsers: () => Promise<(import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const getUserByEmailAndPassword: (email: string, mdp: string) => Promise<(import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
}) | {
    error: string;
}>;
export declare const getUserByEmail: (email: string) => Promise<(import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const getUserByPseudo: (pseudo: string) => Promise<(import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
export declare const registerUser: (userData: any) => Promise<any>;
export declare const getUserLeaderBoard: () => Promise<(import("mongoose").Document<unknown, {}, IUser> & IUser & {
    _id: import("mongoose").Types.ObjectId;
})[]>;
