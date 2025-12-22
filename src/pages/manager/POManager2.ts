import { Page } from '@playwright/test';
import path from 'path';
import fs from 'fs';

/* 
- scans your /pages folder
- dynamically imports page object classes
- creates page objects only when requested
- guarantees one instance per page per test 
*/

export class POManager2 {
  private registry = new Map<string, any>();
  private pageClasses = new Map<string, any>();

  constructor(private page: Page) {}

  async init(): Promise<void> {
    await this.discoverClasses();
  }

  private async discoverClasses() {
  const pagesDir = path.join(__dirname, '../pages');
  if (!fs.existsSync(pagesDir)) return;

  const files = this.walkDirSync(pagesDir); // returns string[]

  for (const filePath of files) {
    if (!filePath.endsWith('.ts') && !filePath.endsWith('.js')) continue;

    const className = path.basename(filePath, path.extname(filePath));
    const key = className.charAt(0).toLowerCase() + className.slice(1);

    try {
      const module = await import(filePath);
      if (module[className]) this.pageClasses.set(key, module[className]);
    } catch (error) {
      console.warn(`Failed to load ${filePath}:`, error);
    }
  }
}

private walkDirSync(dir: string): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const results: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) results.push(...this.walkDirSync(full));
    else results.push(full);
  }
  return results;
}

  get<T = any>(name: string): T {
    if (!this.registry.has(name) && this.pageClasses.has(name)) {
      const PageClass = this.pageClasses.get(name);
      const instance = new PageClass(this.page);
      this.registry.set(name, instance);
    }

    if (this.registry.has(name)) return this.registry.get(name);
    throw new Error(`POManager: '${name}' not found.`);
  }
}