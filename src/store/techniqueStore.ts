import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Technique, techniques as initialTechniques } from '../data/mockData';

interface TechniqueState {
  techniques: Technique[];
  addTechnique: (technique: Technique) => void;
  updateTechnique: (id: string, updates: Partial<Technique>) => void;
  deleteTechnique: (id: string) => void;
  getTechniqueById: (id: string) => Technique | undefined;
  getTechniqueBySlug: (slug: string) => Technique | undefined;
  searchTechniques: (query: string, filters?: {
    disciplineId?: string;
    positionId?: string;
    typeId?: string;
    difficulty?: number;
    tags?: string[];
  }) => Technique[];
}

export const useTechniqueStore = create<TechniqueState>()(
  persist(
    (set, get) => ({
      techniques: initialTechniques,
      addTechnique: (technique) => {
        set(state => ({ techniques: [...state.techniques, technique] }));
      },
      updateTechnique: (id, updates) => {
        set(state => ({
          techniques: state.techniques.map(t =>
            t.id === id ? { ...t, ...updates } : t
          )
        }));
      },
      deleteTechnique: (id) => {
        set(state => ({
          techniques: state.techniques.filter(t => t.id !== id)
        }));
      },
      getTechniqueById: (id) => {
        return get().techniques.find(t => t.id === id);
      },
      getTechniqueBySlug: (slug) => {
        return get().techniques.find(t => t.slug === slug);
      },
      searchTechniques: (query, filters) => {
        let results = get().techniques.filter(t => t.status === 'published');
        
        if (query) {
          const q = query.toLowerCase();
          results = results.filter(t =>
            t.name.toLowerCase().includes(q) ||
            t.description.toLowerCase().includes(q) ||
            t.tags.some(tag => tag.toLowerCase().includes(q))
          );
        }
        
        if (filters?.disciplineId) {
          results = results.filter(t => t.disciplineId === filters.disciplineId);
        }
        if (filters?.positionId) {
          results = results.filter(t => t.positionId === filters.positionId);
        }
        if (filters?.typeId) {
          results = results.filter(t => t.typeId === filters.typeId);
        }
        if (filters?.difficulty) {
          results = results.filter(t => t.difficulty === filters.difficulty);
        }
        if (filters?.tags && filters.tags.length > 0) {
          results = results.filter(t =>
            filters.tags!.some(tag => t.tags.includes(tag))
          );
        }
        
        return results;
      }
    }),
    { name: 'techniques-storage' }
  )
);
