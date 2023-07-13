import React from 'react';
import MarkdownRenderer from './MarkdownRenderer';

const App: React.FC = () => {
  const markdown = `
    > Messages`;
  return (
    <div>
      <h1> markdown render</h1>
      <MarkdownRenderer markdown={markdown} />
    </div>
  );
};
export default App;