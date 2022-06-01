
export interface Streak {
    currentCount: number;
    startDate: string;
    lastLoginDate: string;
}
  
export const key = "streak"

export function dayDiff(date1: string, date2: string): number {
    const date1AsDate = new Date(date1)
    const date2AsDate = new Date(date2)
    const diffTime = Math.abs(date2AsDate.getTime() - date1AsDate.getTime());
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
}


export function shouldIncrement(inputDate: Date, currentStoredDate: string): 'increment' | 'reset' | 'nothing'{
    const dateDiff = dayDiff(currentStoredDate, inputDate.toDateString());
    if(dateDiff === 0) return 'nothing';
    return dateDiff === 1 ? 'increment' : 'reset';
}
  
export function buildStreak(storage: Storage, inputStreak: Partial<Streak>): Streak {
    let streak;
    const streakInLocalStorage = storage.getItem(key);
    if (streakInLocalStorage) {
        try {
        streak = JSON.parse(streakInLocalStorage || "");
        streak = {
            ...streak,
            ...inputStreak
        }
        storage.setItem(key, streak)
        } catch(error) {
            console.error(error);
        }
    }
    return streak;
}