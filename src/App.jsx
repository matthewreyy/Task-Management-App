import { useState, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import TaskGroup from './components/TaskGroup';
import { isToday, isPastDeadline, getGreeting, getGreetingEmoji, getGreetingDate } from './utils/dateUtils';
import styles from './App.module.css';

// Sample initial tasks for demonstration
const INITIAL_TASKS = [
  {
    id: 1,
    title: 'Complete Data Structures LAB assignment',
    dueDate: new Date().toISOString().split('T')[0],
    done: false,
  },
  {
    id: 2,
    title: 'Attend afternoon daily scrum at ms teams',
    dueDate: new Date().toISOString().split('T')[0],
    done: false,
  },
  {
    id: 3,
    title: 'Attend POC assignment meeting with the client',
    dueDate: new Date().toISOString().split('T')[0],
    done: true,
  },
  {
    id: 4,
    title: 'Complete daily leetcode assignment',
    dueDate: new Date().toISOString().split('T')[0],
    done: true,
  },
  {
    id: 5,
    title: 'Prepare product backlog for upcoming ecommerce project',
    dueDate: (() => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0]; })(),
    done: false,
  },
  {
    id: 6,
    title: 'Meeting with product owner to discuss payment gateway options to...',
    dueDate: (() => { const d = new Date(); d.setDate(d.getDate() + 1); return d.toISOString().split('T')[0]; })(),
    done: false,
  },
  {
    id: 7,
    title: 'Attend POC assignment meeting with the client',
    dueDate: (() => { const d = new Date(); d.setDate(d.getDate() + 3); return d.toISOString().split('T')[0]; })(),
    done: true,
  },
  {
    id: 8,
    title: 'Reassign developer teams',
    dueDate: (() => { const d = new Date(); d.setDate(d.getDate() + 8); return d.toISOString().split('T')[0]; })(),
    done: false,
  },
];

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('tasks');
      if (saved) {
        const parsed = JSON.parse(saved);
        // Filter out past-deadline tasks on load
        return parsed.filter((t) => !isPastDeadline(t.dueDate));
      }
    } catch {}
    return INITIAL_TASKS;
  });

  // Persist to localStorage on every change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  function handleAddTask(newTask) {
    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggle(id) {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }

  const todayTasks = tasks.filter((t) => isToday(t.dueDate));
  const otherTasks = tasks.filter((t) => !isToday(t.dueDate));

  return (
    <div className={styles.appWrapper}>

      <main className={styles.main}>
        <div className={styles.card}>
          {/* Greeting */}
          <div className={styles.greeting}>
            <h1 className={styles.greetingTitle}>
              {getGreeting()}, User {getGreetingEmoji()}
            </h1>
            <p className={styles.greetingDate}>It's {getGreetingDate()}</p>
          </div>

          {/* Form */}
          <TaskForm onAddTask={handleAddTask} />

          {/* Task Groups */}
          <div className={styles.groups}>
            <TaskGroup
              title="Today"
              tasks={todayTasks}
              onToggle={handleToggle}
            />
            <TaskGroup
              title="Other"
              tasks={otherTasks}
              onToggle={handleToggle}
            />
          </div>
        </div>
      </main>
    </div>
  );
}
