export class User {
      constructor(public email: string,
                  public username: string,
                  public password: string,
                  public firstName?: string,
                  public lastName?: string){}
}