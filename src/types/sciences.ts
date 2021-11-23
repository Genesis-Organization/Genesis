export interface Group {
  _id: string
  GroupID: number
  GroupName: string
}

export interface Science {
  _id: string
  Group: number
  ScienceID: number
  ScienceName: string
}

export interface Branch {
  _id: string
  Science: number
  BranchID: number
  BranchName: string
  Desc: string
}
