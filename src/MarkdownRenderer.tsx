import React from 'react';
import ReactMarkdown from 'react-markdown';
interface MarkdownRendererProps {
  markdown: string;
}
const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ markdown }) => {
  return <ReactMarkdown>{markdown}</ReactMarkdown>;
};
export default MarkdownRenderer;