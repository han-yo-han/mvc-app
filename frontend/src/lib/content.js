import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 빌드 타임에는 소스 디렉토리를 참조
const contentDir = import.meta.env.DEV
  ? path.join(__dirname, '../content')
  : path.join(process.cwd(), 'src/content');

/**
 * Load JSON file from content/config directory
 */
function loadJSON(filename) {
  const filePath = path.join(contentDir, 'config', filename);
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return null;
  }
}

/**
 * Load all Markdown files from a directory
 */
function loadMarkdownFiles(dir) {
  const dirPath = path.join(contentDir, dir);
  try {
    const files = fs.readdirSync(dirPath);
    return files
      .filter(file => file.endsWith('.md'))
      .map(file => {
        const filePath = path.join(dirPath, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const { data, content: body } = matter(content);
        return {
          ...data,
          content: body,
          slug: file.replace('.md', ''),
        };
      })
      .sort((a, b) => {
        // Sort by date descending (newest first)
        return new Date(b.date) - new Date(a.date);
      });
  } catch (error) {
    console.error(`Error loading markdown files from ${dir}:`, error);
    return [];
  }
}

/**
 * Get church information
 */
export function getChurch() {
  return loadJSON('church.json');
}

/**
 * Get worship information
 */
export function getWorship() {
  return loadJSON('worship.json');
}

/**
 * Get all sermons sorted by date (newest first)
 */
export function getAllSermons() {
  return loadMarkdownFiles('sermons');
}

/**
 * Get sermon by date
 */
export function getSermonByDate(date) {
  const sermons = getAllSermons();
  return sermons.find(sermon => sermon.date === date) || null;
}

/**
 * Get all news sorted by date (newest first)
 */
export function getAllNews() {
  return loadMarkdownFiles('news');
}

/**
 * Get news by date
 */
export function getNewsByDate(date) {
  const news = getAllNews();
  return news.find(item => item.date === date) || null;
}

/**
 * Get location information
 */
export function getLocation() {
  return loadJSON('location.json');
}

/**
 * Get contact information
 */
export function getContact() {
  return loadJSON('contact.json');
}

/**
 * Get newcomer information
 */
export function getNewcomer() {
  return loadJSON('newcomer.json');
}
