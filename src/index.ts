interface Streak {
  currentCount: number;
  startDate: string;
  lastLoginDate: string;
}

export function streakCounter(storage: Storage, date: Date): Streak {
  return {
    currentCount: 1,
    startDate: date.toLocaleDateString("en-US"),
    lastLoginDate: date.toLocaleDateString("en-US"),
  };
}