import { StoreModule } from './types'

import langs from './modules/langs'

const modules: { [key: string]: StoreModule } = {
  langs,
}

export default modules
