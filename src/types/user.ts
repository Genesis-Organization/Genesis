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
  isGenesisMember?: boolean
  isProtected?: boolean
  isSponsor?: boolean

  researchInterests?: ResearchInterest[]
  education?: University[]
  research?: Research[]
  work?: Work[]
  description?: string
  home?: string
  country?: string
  interests?: string[]
  languages?: string[]
  socialMedias?: SocialMedia[]
}

export interface ResearchInterest {
  science: SciencesList
  level: ScienceLevel
  description?: string
}

export interface Work {
  name: string
  position: string
  since: string
}

export interface University {
  science: string
  degree: string
  specialization?: string
}

export interface Research {
  science: SciencesList
  title: string
  description: string
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

export enum SciencesList {
  FILOLOGY_IBERIAN,
  FILOLOGY_ENGLISH,
  FILOLOGY_FRANCE, // AND BENELUX
  FILOLOGY_ITALIAN,
  FILOLOGY_GERMAN,
  FILOLOGY_POLAND, // + UKRAINE + LITHUANIA
  FILOLOGY_BALTIC,
  FILOLOGY_NORDIC,
  FILOLOGY_RUSSIAN,
  FILOLOGY_HUNGARIAN, // + CZECHIA + SLOVAK REPUBLIC
  FILOLOGY_BULGARIAN, // + ROMANIA
  FILOLOGY_YUGOSLAVIAN,
  FILOLOGY_GREEK,
  FILOLOGY_TURKEY,
  FILOLOGY_MIDDLEEAST,
  FILOLOGY_INDIAN,
  FILOLOGY_CHINESE,
  FILOLOGY_KOREAN,
  FILOLOGY_JAPANEESE,

  ANTROPOLOGY,
  PHILOSOPHY,
  HISTORY,
  HISTORYOFART,
  CULTURALSTUDIES,
  POLITOLOGY,
  LAW,
  PSYCHOLOGY,
  THEOLOGY,
  DEFENSESTUDIES,
  SOCIOLOGY,
  INTERNATIONALSTUDIES,

  ECONOMICS,
  FINANCES,
  ACCOUNTANCY,
  ECONOMETRICS,
  GOVERNANCE,
  MANAGEMENT,

  ASTRONOMY,
  BIOINFORMATICS,
  BIOCHEMISTRY,
  BIOPHYSICS,
  BIOTECHNOLOGY,
  BIOLOGY,
  CHEMISTRY,
  PHYSICS,
  GEOGRAPHY,
  GEOLOGY,
  INFORMATICS,
  MATH,
  ECOLOGY,

  ARCHITECTURE,
  ROBOTICS,
  BUILDING_ENG,
  ENERGETICS,
  ELECTRONICS,
  QUANTUM_ENG,
  COSMONAUTICS,
  MECHANICS,
  MECHATRONICS,
  TRANSPORT,
}

export enum ScienceLevel {
  BEGINNER = '1',
  INTERMEDIATE = '2',
  ADVANCED = '3',
  EXPERT = '4',
  MASTER = '5',
  VISIONARY = '6',
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
