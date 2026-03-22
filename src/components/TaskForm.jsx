import { useState } from 'react';
import styles from './TaskForm.module.css';

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !dueDate) return;

    onAddTask({
      id: Date.now(),
      title: title.trim(),
      dueDate,
      done: false,
    });

    setTitle('');
    setDueDate('');
  }

  // Format date for display in placeholder
  function formatDateDisplay(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <div className={styles.formRow}>
      <div className={styles.fieldGroup}>
        <label className={styles.label}>What do you want to do?</label>
        <input
          type="text"
          className={styles.input}
          placeholder="Study for mid exams..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className={styles.fieldGroup}>
        <label className={styles.label}>When should it be done?</label>
        <div className={styles.dateWrapper}>
          <input
            type="text"
            className={styles.input}
            placeholder="Select a date"
            value={formatDateDisplay(dueDate)}
            readOnly
            onClick={() => document.getElementById('hiddenDate').showPicker?.() || document.getElementById('hiddenDate').click()}
          />
          <input
            id="hiddenDate"
            type="date"
            className={styles.hiddenDate}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <span
            className={styles.calIcon}
            onClick={() => document.getElementById('hiddenDate').showPicker?.() || document.getElementById('hiddenDate').click()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
        </div>
      </div>

      <button
        className={styles.createBtn}
        onClick={handleSubmit}
        disabled={!title.trim() || !dueDate}
      >
        Create
      </button>
    </div>
  );
}
