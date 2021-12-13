/* eslint-disable */

const setMeta = (doc: Document, data: any) => {
  data.title ? (doc.title = data.title) : (doc.title = 'Genesis')
}

export default setMeta
