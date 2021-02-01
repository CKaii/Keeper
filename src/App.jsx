import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Note from './components/Note';
import CreateArea from './components/CreateArea';
import notes from './notes';

function App() {
  return (
    <div>
      <Header />
      <CreateArea />
      {notes.map((noteContent) => {
        return (
          <Note
            key={noteContent.key}
            title={noteContent.title}
            content={noteContent.content}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
