import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export type Note = {
  id: number
  title: string
  content: string
  category: string
  createdAt: Date | string
}

type NoteState = {
  notes: Note[]
  addNote: (note: Note) => void
  removeNote: (id: number) => void
  
}

export const newNoteStore =  create<NoteState>()(
  persist(
    (set, get) => ({
      notes: [],

      addNote: (note: Note) =>
        set((state) => ({ notes: [note, ...state.notes] })),
      
      removeNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id != id),
        })),

       
    }),
    { name: 'notesStore', storage: createJSONStorage(() => localStorage) }
  )
)
type ButtonState={
  btnFilter:string
  updateButton:(newButton:string)=>void
}
export const useFilterButtons = create<ButtonState>((set) => ({
  btnFilter: 'All' ,
  
  updateButton: (newButton:string) => set({ btnFilter: newButton }),
}))