import { copyFileSync, mkdirSync, existsSync } from 'node:fs'
import { dirname, resolve } from 'node:path'

const filesToCopy = [
  { from: 'home.html', to: 'home.html' },
  { from: 'index.html', to: 'index.html' },
]

const distDir = resolve('dist')

filesToCopy.forEach(({ from, to }) => {
  const sourcePath = resolve(from)
  const targetPath = resolve(distDir, to)
  const targetDir = dirname(targetPath)

  if (!existsSync(sourcePath)) {
    console.warn(`[postbuild] Skipping missing file: ${from}`)
    return
  }

  if (!existsSync(targetDir)) {
    mkdirSync(targetDir, { recursive: true })
  }

  copyFileSync(sourcePath, targetPath)
  console.log(`[postbuild] Copied ${from} -> dist/${to}`)
})

