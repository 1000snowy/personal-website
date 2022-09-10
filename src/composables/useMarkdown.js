import { parse } from "marked";

export function useMarkdown(content) {
  let pos = 4;
  let frontmatter = "";
  while (pos < content.length) {
    if (
      content[pos] === "-" &&
      content[pos + 1] === "-" &&
      content[pos + 2] === "-"
    ) {
      break;
    } else {
      frontmatter += content[pos];
      pos++;
    }
  }
  const data = parseFrontmatter(frontmatter);
  const html = parse(content.slice(pos + 3));

  return { data, html };
}

const regex = new RegExp("(\\w+): (.+)", "g");

function parseFrontmatter(frontmatter) {
  const data = {};
  let m;
  while ((m = regex.exec(frontmatter)) !== null) {
    if (m.index === regex.lastIndex) {
      regex.lastIndex++;
    }

    const [, key, value] = m;
    key === "tags" ? (data[key] = value.split("&")) : (data[key] = value);
  }
  return data;
}
