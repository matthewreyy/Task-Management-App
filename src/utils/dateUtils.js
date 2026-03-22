// Returns "Today", "Tomorrow", or formatted date like "Mon, 15 Apr"
export function getDateLabel(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);

  if (target.getTime() === today.getTime()) return 'Today';
  if (target.getTime() === tomorrow.getTime()) return 'Tomorrow';

  return target.toLocaleDateString('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
  });
}

// Returns true if deadline has already passed (before today)
export function isPastDeadline(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return target.getTime() < today.getTime();
}

// Returns true if deadline is today
export function isToday(dateStr) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(dateStr);
  target.setHours(0, 0, 0, 0);
  return target.getTime() === today.getTime();
}

// Format full greeting date: "Monday, 12 April 2025"
export function getGreetingDate() {
  return new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}

// Get greeting based on hour
export function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning';
  if (hour < 17) return 'Good Afternoon';
  return 'Good Evening';
}

// Get greeting emoji based on hour
export function getGreetingEmoji() {
  const hour = new Date().getHours();
  if (hour < 12) return '👋';
  if (hour < 17) return '☀️';
  return '🌙';
}

// Get badge variant for styling
export function getBadgeVariant(dateStr) {
  const label = getDateLabel(dateStr);
  if (label === 'Today') return 'today';
  if (label === 'Tomorrow') return 'tomorrow';
  return 'future';
}
