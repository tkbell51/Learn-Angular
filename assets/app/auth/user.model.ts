export class User {
  [x: string]: any;
         constructor(public username: string, 
            public password: string, 
            public email?: string, 
            public firstName?: string, 
            public lastName?: string) {}
       }