// PascalCase -  required data
// camelCase -   optional data

export interface User {
  _id?: string
  Name: string
  Surname: string
  Login: string
  Email: string
  DateOfBirth: string
  Degree: string
  Password: string

  avatarFileID?: string
  bannerFileID?: string
  isEmailPublic?: boolean
  isAgePublic?: boolean
  socialMedias?: SocialMedia[]
  education?: University[]
  description?: string
  home?: string
  country?: string
  work?: string
  interests?: string[]
  languages?: string[]
}

export interface University {
  science: string
  degree: string
  specialization?: string
}

export interface SocialMedia {
  brand: SocialMediaList
  content: string
}

export enum SocialMediaList {
  GOOGLE = 'Google',
  FACEBOOK = 'Facebook',
  YOUTUBE = 'YouTube',
  INSTAGRAM = 'Instagram',
  TWITTER = 'Twitter',
  MICROSOFT = 'Microsoft',
  GITHUB = 'Github',
  DISCORD = 'Discord',
  REDDIT = 'Reddit',
  TELEGRAM = 'Telegram',
  PINTEREST = 'Pinterest',
  SPOTIFY = 'Spotify',
  LINKEDIN = 'LinkedIn',
  TWITCH = 'Twitch',
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

export interface UserRegisterDummy {
  ConfirmedPassword: string
  Rodo: boolean
}

export interface UserRegisterError {
  T: string
  ID: number
}

export interface UserLoginReq {
  Login: string
  Password: string
}
