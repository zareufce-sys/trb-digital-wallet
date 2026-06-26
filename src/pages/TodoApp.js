import React, { useState, useEffect } from 'react';
import { MdAdd, MdDelete, MdCheckCircle, MdCircle } from 'react-icons/md';
import './TodoApp.css';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [filter, setFilter] = useState('all');

  //載入 localStorage 中的待辦事項
  useEffect(() => {
    const savedTodos = localStorage.getItem('todos');
    if (savedTodos) {
      try {
        setTodos(JSON.parse(savedTodos));
      } catch (error) {
        console.error('Error loading todos:', error);
      }
    }
  }, []);

  // 保存待辦事項到 localStorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // 添加新的待辦事項
  const addTodo = () => {
    if (inputValue.trim() === '') return;

    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toLocaleString(),
    };

    setTodos([newTodo, ...todos]);
    setInputValue('');
  };

  // 刪除待辦事項
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // 切換待辦事項的完成狀態
  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  // 清除所有已完成的待辦事項
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  // 篩選待辦事項
  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'active') return !todo.completed;
    return true;
  });

  const completedCount = todos.filter((todo) => todo.completed).length;
  const activeCount = todos.filter((todo) => !todo.completed).length;

  return (
    <div className="todo-container">
      <div className="todo-card">
        <div className="todo-header">
          <h1>✨ My Tasks</h1>
          <p className="todo-subtitle">Stay organized and productive</p>
        </div>

        {/* Input Section */}
        <div className="todo-input-section">
          <div className="input-wrapper">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && addTodo()}
              placeholder="Add a new task..."
              className="todo-input"
            />
            <button onClick={addTodo} className="add-btn">
              <MdAdd size={24} />
              Add
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-section">
          <div className="stat">
            <span className="stat-label">Total</span>
            <span className="stat-value">{todos.length}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Active</span>
            <span className="stat-value active">{activeCount}</span>
          </div>
          <div className="stat">
            <span className="stat-label">Completed</span>
            <span className="stat-value completed">{completedCount}</span>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-buttons">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
            onClick={() => setFilter('active')}
          >
            Active
          </button>
          <button
            className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
            onClick={() => setFilter('completed')}
          >
            Completed
          </button>
        </div>

        {/* Todos List */}
        <div className="todos-list">
          {filteredTodos.length === 0 ? (
            <div className="empty-state">
              <p className="empty-icon">📝</p>
              <p className="empty-text">
                {todos.length === 0
                  ? 'No tasks yet. Add one to get started!'
                  : 'No tasks in this filter'}
              </p>
            </div>
          ) : (
            filteredTodos.map((todo) => (
              <div key={todo.id} className="todo-item">
                <button
                  className="toggle-btn"
                  onClick={() => toggleTodo(todo.id)}
                >
                  {todo.completed ? (
                    <MdCheckCircle size={24} className="icon-checked" />
                  ) : (
                    <MdCircle size={24} className="icon-unchecked" />
                  )}
                </button>
                <div className="todo-content">
                  <p className={`todo-text ${todo.completed ? 'completed' : ''}`}>
                    {todo.text}
                  </p>
                  <span className="todo-time">{todo.createdAt}</span>
                </div>
                <button
                  className="delete-btn"
                  onClick={() => deleteTodo(todo.id)}
                >
                  <MdDelete size={20} />
                </button>
              </div>
            ))
          )}
        </div>

        {/* Clear Completed Button */}
        {completedCount > 0 && (
          <button onClick={clearCompleted} className="clear-btn">
            Clear {completedCount} Completed Task{completedCount !== 1 ? 's' : ''}
          </button>
        )}
      </div>
    </div>
  );
}

export default TodoApp;
