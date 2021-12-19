export interface Group {
  _id?: string
  GroupID: number
  GroupName: string
}

export interface Science {
  _id: string
  Group: number | Group
  ScienceID: number
  ScienceName: string
}

export interface Branch {
  _id: string
  Science: Science
  BranchID: number
  BranchName: string
  Desc: string
  Subjects?: Subject[]
}

export interface Subject {
  _id: string
  Science: number
  SubjectID: number
  SubjectName: string
  Formulas?: Formula[]
}

export interface Formula {
  Subject: number
  ID: number
  Name: string
  Content: string
  Difficulty: number
  Unit?: string
  Quantities?: Quantity | Quantity[]
}

interface Quantity {
  Symbol: string
  Content: string
}
