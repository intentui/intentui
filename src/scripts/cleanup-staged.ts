import { promises as fs } from 'fs'
import path from 'path'

const ROOT = process.cwd()
const STAGE_DIR = path.resolve(ROOT, 'registry')

async function main() {
  try {
    await fs.rm(STAGE_DIR, { recursive: true, force: true })
    console.log(`[cleanup] Finished removing folder: ${STAGE_DIR}`)
  } catch (err) {
    console.warn('[cleanup] Failed to remove registry/, ignore if not critical:', err)
  }
}

main()
