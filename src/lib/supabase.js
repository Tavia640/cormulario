import { createClient } from '@supabase/supabase-js'

// Configurações do Supabase
// IMPORTANTE: Substitua estas variáveis pelas suas credenciais do Supabase
const supabaseUrl = 'YOUR_SUPABASE_URL'
const supabaseKey = 'YOUR_SUPABASE_ANON_KEY'

// Criando o cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseKey)

// Função para inserir dados do cliente
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
    console.error('Erro na operação:', error)
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
    console.error('Erro na operação:', error)
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
      console.error('Erro ao buscar cliente:', error)
      throw error
    }

    return data
  } catch (error) {
    console.error('Erro na operação:', error)
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
    console.error('Erro na operação:', error)
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
    console.error('Erro na operação:', error)
    throw error
  }
}

