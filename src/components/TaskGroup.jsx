import { useState } from 'react';
import TaskItem from './TaskItem';
import styles from './TaskGroup.module.css';

export default function TaskGroup({ title, tasks, onToggle }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={styles.group}>
      <div className={styles.header} onClick={() => setCollapsed((prev) => !prev)}>
        <button
          className={`${styles.collapseBtn} ${collapsed ? styles.rotated : ''}`}
          aria-label={collapsed ? 'Expand group' : 'Collapse group'}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        <span className={styles.calIcon}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Calendar body - outline */}
            <rect x="3" y="5" width="18" height="16" rx="2.5" stroke="#111827" strokeWidth="2" fill="none"/>
            {/* Left prong */}
            <rect x="8" y="2" width="2" height="5" rx="1" fill="#111827"/>
            {/* Right prong */}
            <rect x="14" y="2" width="2" height="5" rx="1" fill="#111827"/>
            {/* Divider */}
            <line x1="3" y1="9.5" x2="21" y2="9.5" stroke="#111827" strokeWidth="2"/>
            {/* Row 1 */}
            <rect x="7" y="12" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
            <rect x="11" y="12" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
            <rect x="15" y="12" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
            {/* Row 2 */}
            <rect x="7" y="15.5" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
            <rect x="11" y="15.5" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
            <rect x="15" y="15.5" width="2.5" height="2.5" rx="0.4" fill="#111827"/>
          </svg>
        </span>
        <span className={styles.title}>{title}</span>
        <span className={styles.count}>{tasks.length}</span>
      </div>

      {!collapsed && (
        <div className={styles.list}>
          {tasks.length === 0 ? (
            <p className={styles.empty}>No tasks here.</p>
          ) : (
            tasks.map((task) => (
              <TaskItem key={task.id} task={task} onToggle={onToggle} />
            ))
          )}
        </div>
      )}
    </div>
  );
}
