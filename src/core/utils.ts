import path from 'node:path'

export const getAbsoluteFilePaths = (filePaths: string[]) => {
  return filePaths.map(filePath => {
    return path.isAbsolute(filePath) ? filePath : path.resolve(process.cwd(), filePath)
  })
}
