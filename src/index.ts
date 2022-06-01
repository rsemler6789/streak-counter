import { Streak, key, buildStreak, shouldIncrement } from './lib'

export function streakCounter(storage: Storage, date: Date): Streak {
  const streakInLocalStorage = storage.getItem(key);
  if (streakInLocalStorage) {
    try {
      let streak = JSON.parse(streakInLocalStorage || "");
      let incrementOutput = shouldIncrement(date, streak.lastLoginDate);
      if(incrementOutput === 'increment') {
        let count = streak.currentCount + 1;
        streak = {
          ...streak,
          lastLoginDate: date.toLocaleDateString("en-US"),
          currentCount: count
        }
      } else if(incrementOutput === 'reset') {
        streak = {
          ...streak,
          lastLoginDate: date.toLocaleDateString("en-US"),
          currentCount: 1
        }
      }
      storage.setItem(key, JSON.stringify(streak));
      return streak;
    } catch (error) {
      console.error("Failed to parse streak from localStorage");
    }
  }
  const streak = {
    currentCount: 1,
    startDate: date.toLocaleDateString("en-US"),
    lastLoginDate: date.toLocaleDateString("en-US"),
  };

  // store in localStorage
  storage.setItem(key, JSON.stringify(streak));

  return streak;
}