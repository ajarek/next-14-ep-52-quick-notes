'use server'

import { revalidatePath } from 'next/cache'
export const createNote = async (formData: FormData) => {
  try {
    console.log(formData)
    revalidatePath('/')
  } catch (err) {
    console.log(err)
  }
}