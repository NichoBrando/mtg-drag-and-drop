import React, { useState } from 'react'
import './App.css'
import DeckList from './components/DeckList/DeckList';
import Sidebar from './components/Sidebar'
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd'; 

function App() {

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [cards, setCards] = useState([]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Sidebar 
          isOpen={isSidebarOpen}
          openSidebar={() => setIsSidebarOpen(true)}
        />
        <DeckList 
          isSidebarOpen={isSidebarOpen}
          cards={cards}
          setCards={setCards}
        />
      </div>
    </DndProvider>
  )
}

export default App
