import { useEffect, useState, useCallback } from "react";

type Progress = {
  name: string;
  currentDay: number;
  completedDays: number[];
  water: number; // glasses
  favorites: string[];
  startWeight?: number;
  goalWeight?: number;
  height?: number;
  age?: string;
  onboarded: boolean;
};

const KEY = "desafio21-progress";

const defaultProgress: Progress = {
  name: "linda",
  currentDay: 1,
  completedDays: [],
  water: 0,
  favorites: [],
  onboarded: false,
};

export function useProgress() {
  const [progress, setProgress] = useState<Progress>(defaultProgress);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = localStorage.getItem(KEY);
      if (raw) setProgress({ ...defaultProgress, ...JSON.parse(raw) });
    } catch {}
    setLoaded(true);
  }, []);

  const update = useCallback((patch: Partial<Progress> | ((p: Progress) => Partial<Progress>)) => {
    setProgress((prev) => {
      const next = { ...prev, ...(typeof patch === "function" ? patch(prev) : patch) };
      try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
      return next;
    });
  }, []);

  const toggleFavorite = useCallback((id: string) => {
    update((p) => ({
      favorites: p.favorites.includes(id) ? p.favorites.filter((x) => x !== id) : [...p.favorites, id],
    }));
  }, [update]);

  const completeDay = useCallback((day: number) => {
    update((p) => ({
      completedDays: p.completedDays.includes(day) ? p.completedDays : [...p.completedDays, day],
      currentDay: Math.min(21, Math.max(p.currentDay, day + 1)),
    }));
  }, [update]);

  return { progress, update, toggleFavorite, completeDay, loaded };
}
