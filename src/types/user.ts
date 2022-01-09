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
  university: string
  science: string
  degree: string
  time: string
  place: string
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
  PHILOLOGY_IBERIAN = 'PHILOLOGY_IBERIAN', // PORTUGALY + SPAIN
  PHILOLOGY_ENGLISH = 'PHILOLOGY_ENGLISH',
  PHILOLOGY_FRANCE = 'PHILOLOGY_FRANCE', // AND BENELUX
  PHILOLOGY_ITALIAN = 'PHILOLOGY_ITALIAN',
  PHILOLOGY_GERMAN = 'PHILOLOGY_GERMAN', // DACHL
  PHILOLOGY_POLAND = 'PHILOLOGY_POLAND', // + UKRAINE + LITHUANIA
  PHILOLOGY_BALTIC = 'PHILOLOGY_BALTIC', // LATVIA + ESTONIA
  PHILOLOGY_NORDIC = 'PHILOLOGY_NORDIC', // SCANDINAVIA + FINLAND + ICELAND
  PHILOLOGY_RUSSIAN = 'PHILOLOGY_RUSSIAN',
  PHILOLOGY_CARPATHIAN = 'PHILOLOGY_CARPATHIAN', // HUNGARY + CZECHIA + SLOVAK REPUBLIC
  PHILOLOGY_ROMANIAN = 'PHILOLOGY_ROMANIAN', // + ROMANIA
  PHILOLOGY_BALKAN = 'PHILOLOGY_BALKAN', // YUGOSLAVIA + ALBANIA
  PHILOLOGY_GREEK = 'PHILOLOGY_GREEK',
  PHILOLOGY_TURKISH = 'PHILOLOGY_TURKISH',
  PHILOLOGY_AFRICAN = 'PHILOLOGY_AFRICAN',
  PHILOLOGY_HEBREW = 'PHILOLOGY_HEBREW',
  PHILOLOGY_MIDDLEEAST = 'PHILOLOGY_MIDDLEEAST', // MIDDLE EAST + ARABIAN + PERSIAN
  PHILOLOGY_INDIAN = 'PHILOLOGY_INDIAN',
  PHILOLOGY_ORIENTAL = 'PHILOLOGY_ORIENTAL',
  PHILOLOGY_CHINESE = 'PHILOLOGY_CHINESE',
  PHILOLOGY_KOREAN = 'PHILOLOGY_KOREAN',
  PHILOLOGY_JAPANESE = 'PHILOLOGY_JAPANESE',

  ANTHROPOLOGY = 'ANTHROPOLOGY',
  ARCHEOLOGY = 'ARCHEOLOGY',
  CULTURALSTUDIES = 'CULTURALSTUDIES',
  DEFENSESTUDIES = 'DEFENSESTUDIES',
  HISTORY = 'HISTORY',
  HISTORYOFART = 'HISTORYOFART',
  INTERNATIONALSTUDIES = 'INTERNATIONALSTUDIES',
  JOURNALISM = 'JOURNALISM',
  LAW = 'LAW',
  LINGUISTICS = 'LINGUISTICS',
  MEDIASTUDIES = 'CULTURALSTUDIES',
  POLITOLOGY = 'POLITOLOGY',
  PHILOSOPHY = 'PHILOSOPHY',
  PSYCHOLOGY = 'PSYCHOLOGY',
  RELIGIOUSSTUDIES = 'RELIGIOUSSTUDIES',
  SOCIOLOGY = 'SOCIOLOGY',

  ECONOMICS = 'ECONOMICS',
  FINANCES = 'FINANCES',
  ACCOUNTANCY = 'ACCOUNTANCY',
  ECONOMETRICS = 'ECONOMETRICS',
  GOVERNANCE = 'GOVERNANCE',
  MANAGEMENT = 'MANAGEMENT',

  ASTRONOMY = 'ASTRONOMY',
  BIOINFORMATICS = 'BIOINFORMATICS',
  BIOCHEMISTRY = 'BIOCHEMISTRY',
  BIOPHYSICS = 'BIOPHYSICS',
  BIOTECHNOLOGY = 'BIOTECHNOLOGY',
  BIOLOGY = 'BIOLOGY',
  CHEMISTRY = 'CHEMISTRY',
  PHYSICS = 'PHYSICS',
  GEOGRAPHY = 'GEOGRAPHY',
  GEOLOGY = 'GEOLOGY',
  INFORMATICS = 'INFORMATICS',
  MATHEMATICS = 'MATHEMATICS',
  ECOLOGY = 'ECOLOGY',

  BIOMEDICAL_ENGINEERING = 'BIOMEDICAL_ENGINEERING',
  CIVIL_ENGINEERING = 'CIVIL_ENGINEERING',
  ELECTRICAL_ENGINEERING = 'ELECTRICAL_ENGINEERING',
  ENVIRONMENTAL_ENGINEERING = 'ENVIRONMENTAL_ENGINEERING',
  MATERIALS_ENGINEERING = 'MATERIALS_ENGINEERING',
  QUANTUM_ENGINEERING = 'QUANTUM_ENGINEERING',
  ARCHITECTURE = 'ARCHITECTURE',
  COSMONAUTICS = 'COSMONAUTICS',
  ELECTRONICS = 'ELECTRONICS',
  ENERGETICS = 'ENERGETICS',
  MECHANICS = 'MECHANICS',
  MECHATRONICS = 'MECHATRONICS',
  METALURGY = 'METALURGY',
  NANOTECHNOLOGY = 'NANOTECHNOLOGY',
  ROBOTICS = 'ROBOTICS',
  TELECOMMUNICATIONS = 'TELECOMMUNICATIONS',
  TRANSPORT = 'TRANSPORT',
}

export enum ScienceLevel {
  BEGINNER = 'BEGINNER',
  INTERMEDIATE = 'INTERMEDIATE',
  ADVANCED = 'ADVANCED',
  EXPERT = 'EXPERT',
  MASTER = 'MASTER',
  VISIONARY = 'VISIONARY',
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
