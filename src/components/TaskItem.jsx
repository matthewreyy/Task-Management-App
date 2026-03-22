import { getDateLabel, getBadgeVariant } from '../utils/dateUtils';
import styles from './TaskItem.module.css';

export default function TaskItem({ task, onToggle }) {
  const label = getDateLabel(task.dueDate);
  const variant = getBadgeVariant(task.dueDate);

  return (
    <div className={`${styles.item} ${task.done ? styles.done : ''}`}>
      <div className={styles.left}>
        <button
          className={`${styles.checkbox} ${task.done ? styles.checked : ''}`}
          onClick={() => onToggle(task.id)}
          aria-label={task.done ? 'Mark as not done' : 'Mark as done'}
        >
          {task.done && (
            <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
              <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          )}
        </button>
        <span className={`${styles.title} ${task.done ? styles.strikethrough : ''}`}>
          {task.title}
        </span>
      </div>

      <span className={`${styles.badge} ${styles[variant]}`}>
        {label}
      </span>
    </div>
  );
}
