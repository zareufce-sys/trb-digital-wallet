import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TodoApp from './pages/TodoApp';

function AppTodoList() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [currentPage, setCurrentPage] = useState('dashboard');

  return (
    <div className="app-container">
      {currentPage === 'dashboard' && (
        <>
          <Sidebar isOpen={sidebarOpen} />
          <div className="main-content">
            <Header onMenuClick={() => setSidebarOpen(!sidebarOpen)} />
            <Dashboard />
          </div>
        </>
      )}
      {currentPage === 'todo' && <TodoApp />}
    </div>
  );
}

export default AppTodoList;
