import open from 'open'
import path from 'path'

const demoPath = path.resolve('file://', __dirname, '../demo')

open(demoPath, 'google chrome', (err) => {
  if (err) {
    open(demoPath, 'firefox', (err) => {
      if (err) {
        throw new Error('Cannot open demo in chrome or firefox browser')
      }
    })
  }
})