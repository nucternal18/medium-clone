import { ReactNode } from "react";

export interface MarkdownNode {
  type: string;
  key: string;
  children?: MarkdownNode[];
  content?: string;
  attributes?: Record<string, string>;
}

export interface MarkdownRenderer {
  paragraph?: (node: MarkdownNode) => ReactNode;
  img?: (node: MarkdownNode) => ReactNode;
  [key: string]: ((node: MarkdownNode) => ReactNode) | undefined;
}

export interface MarkdownStyle {
  body?: any;
  heading1?: any;
  heading2?: any;
  heading3?: any;
  paragraph?: any;
  code_inline?: any;
  code_block?: any;
  blockquote?: any;
  list_item?: any;
  [key: string]: any;
}
