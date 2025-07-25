import { createClient } from '@supabase/supabase-js'

// Configurações do Supabase
const supabaseUrl = 'https://your-project-ref.supabase.co'
const supabaseAnonKey = 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Função para inserir um novo cliente
export const inserirCliente = async (dadosCliente) => {
  try {
    const { data, error } = await supabase
      .from('clientes')
      .insert([dadosCliente])
      .select()

    if (error) {
      console.error('Erro ao inserir cliente:', error)
      throw error
    }

    console.log('Cliente inserido com sucesso:', data)
    return data
  } catch (error) {
    console.error('Erro na função inserirCliente:', error)
    throw error
  }
}

// Função para buscar todos os clientes
export const buscarClientes = async () => {
  try {
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) {
      console.error('Erro ao buscar clientes:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Erro na função buscarClientes:', error)
    throw error
  }
}

// Função para buscar cliente por ID
export const buscarClientePorId = async (id) => {
  try {
    const { data, error } = await supabase
      .from('clientes')
      .select('*')
      .eq('id', id)
      .single()

    if (error) {
      console.error('Erro ao buscar cliente por ID:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Erro na função buscarClientePorId:', error)
    throw error
  }
}

// Função para atualizar cliente
export const atualizarCliente = async (id, dadosAtualizados) => {
  try {
    const { data, error } = await supabase
      .from('clientes')
      .update(dadosAtualizados)
      .eq('id', id)
      .select()

    if (error) {
      console.error('Erro ao atualizar cliente:', error)
      throw error
    }

    console.log('Cliente atualizado com sucesso:', data)
    return data
  } catch (error) {
    console.error('Erro na função atualizarCliente:', error)
    throw error
  }
}

// Função para deletar cliente
export const deletarCliente = async (id) => {
  try {
    const { error } = await supabase
      .from('clientes')
      .delete()
      .eq('id', id)

    if (error) {
      console.error('Erro ao deletar cliente:', error)
      throw error
    }

    console.log('Cliente deletado com sucesso')
    return true
  } catch (error) {
    console.error('Erro na função deletarCliente:', error)
    throw error
  }
}

