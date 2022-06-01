export interface Streak {
    currentCount: number;
    startDate: string;
    lastLoginDate: string;
}
export declare const key = "streak";
export declare function dayDiff(date1: string, date2: string): number;
export declare function shouldIncrement(inputDate: Date, currentStoredDate: string): 'increment' | 'reset' | 'nothing';
export declare function buildStreak(storage: Storage, inputStreak: Partial<Streak>): Streak;
