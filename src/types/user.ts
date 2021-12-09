export class User {
  name: string
  surname: string
  avatarFileID: string
  login: string
  premium?: PremiumUser

  constructor(
    name: string,
    surname: string,
    avatarFileID: string,
    login: string,
    premium?: PremiumUser
  ) {
    this.name = name
    this.surname = surname
    this.avatarFileID = avatarFileID
    ;(this.login = login), (this.premium = premium)
  }

  username(): string {
    return `${this.name} ${this.surname}`
  }
}

export enum PremiumUser {
  Supporter = 'Wspierający',
  Admin = 'Admin',
}

export interface UserRegisterReq {
  Name: string
  Surname: string
  Login: string
  Email: string
  DateOfBirth: string
  Degree: string
  Password: string
}
