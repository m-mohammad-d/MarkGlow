import { it, expect, describe } from "vitest";
import { convertMarkdownToHtml } from "../src/index";

describe("convertMarkdownToHtml", () => {
  it("converts H1 header", () => {
    const input = "# Hello World";
    const expected = "<h1>Hello World</h1>";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts H2 header", () => {
    const input = "## Hello World";
    const expected = "<h2>Hello World</h2>";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts bold text", () => {
    const input = "**Bold Text**";
    const expected = "<b>Bold Text</b>";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts italic text", () => {
    const input = "*Italic Text*";
    const expected = "<i>Italic Text</i>";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts links", () => {
    const input = "[Google](https://google.com)";
    const expected = "<a href='https://google.com'>Google</a>";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts images", () => {
    const input = "![Alt text](https://example.com/image.png)";
    const expected =
      "<img alt='Alt text' src='https://example.com/image.png' />";
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });

  it("converts multiple markdown elements", () => {
    const input = `# Title
## Subtitle
**Bold** and *Italic* text
[Link](https://example.com)
![Image](https://example.com/image.png)`;
    const expected = `<h1>Title</h1>
<h2>Subtitle</h2>
<b>Bold</b> and <i>Italic</i> text
<a href='https://example.com'>Link</a>
<img alt='Image' src='https://example.com/image.png' />`;
    expect(convertMarkdownToHtml(input)).toBe(expected);
  });
});
