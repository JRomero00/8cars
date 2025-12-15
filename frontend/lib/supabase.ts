import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ''
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Helper para guardar contactos
export async function saveContact(data: {
  name: string
  email: string
  phone: string
  message: string
}) {
  const { data: result, error } = await supabase
    .from('contacts')
    .insert([
      {
        ...data,
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) throw error
  return result
}

// Helper para guardar leads de autos
export async function saveLead(data: {
  name: string
  email: string
  phone: string
  car_id?: string
  car_title?: string
  message?: string
}) {
  const { data: result, error } = await supabase
    .from('leads')
    .insert([
      {
        ...data,
        created_at: new Date().toISOString(),
      },
    ])
    .select()

  if (error) throw error
  return result
}