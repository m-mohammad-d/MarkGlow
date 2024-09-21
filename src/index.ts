import { parseMarkdown } from "./parser/markDownParser";

export function convertMarkdownToHtml(markdown: string): string {
  return parseMarkdown(markdown);
}
