import { create } from 'zustand';
import { persist } from 'zustand/middleware';

type ProgressStatus = 'not_started' | 'learning' | 'practiced' | 'mastered';

interface BookmarkState {
  bookmarks: string[];
  toggleBookmark: (techniqueId: string) => void;
  isBookmarked: (techniqueId: string) => boolean;
}

interface ProgressState {
  progress: Record<string, ProgressStatus>;
  notes: Record<string, string>;
  setProgress: (techniqueId: string, status: ProgressStatus) => void;
  getProgress: (techniqueId: string) => ProgressStatus;
  setNote: (techniqueId: string, note: string) => void;
  getNote: (techniqueId: string) => string;
}

export const useBookmarkStore = create<BookmarkState>()(
  persist(
    (set, get) => ({
      bookmarks: [],
      toggleBookmark: (techniqueId) => {
        const current = get().bookmarks;
        if (current.includes(techniqueId)) {
          set({ bookmarks: current.filter(id => id !== techniqueId) });
        } else {
          set({ bookmarks: [...current, techniqueId] });
        }
      },
      isBookmarked: (techniqueId) => {
        return get().bookmarks.includes(techniqueId);
      }
    }),
    { name: 'bookmarks-storage' }
  )
);

export const useProgressStore = create<ProgressState>()(
  persist(
    (set, get) => ({
      progress: {},
      notes: {},
      setProgress: (techniqueId, status) => {
        set(state => ({
          progress: { ...state.progress, [techniqueId]: status }
        }));
      },
      getProgress: (techniqueId) => {
        return get().progress[techniqueId] || 'not_started';
      },
      setNote: (techniqueId, note) => {
        set(state => ({
          notes: { ...state.notes, [techniqueId]: note }
        }));
      },
      getNote: (techniqueId) => {
        return get().notes[techniqueId] || '';
      }
    }),
    { name: 'progress-storage' }
  )
);
