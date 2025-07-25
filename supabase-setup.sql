-- Script SQL para criar a tabela de clientes no Supabase
-- Execute este script no SQL Editor do seu projeto Supabase

-- Criar a tabela clientes
CREATE TABLE IF NOT EXISTS clientes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cpf VARCHAR(14) NOT NULL UNIQUE,
  rg VARCHAR(20) NOT NULL,
  orgao_emissor VARCHAR(10) NOT NULL,
  estado VARCHAR(2) NOT NULL,
  email VARCHAR(255) NOT NULL,
  telefone VARCHAR(20) NOT NULL,
  profissao VARCHAR(255) NOT NULL,
  data_nascimento DATE NOT NULL,
  estado_civil VARCHAR(20) NOT NULL CHECK (estado_civil IN ('solteiro', 'casado', 'divorciado', 'uniao-estavel', 'desquitado', 'separado', 'viuvo')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índices para melhor performance
CREATE INDEX IF NOT EXISTS idx_clientes_cpf ON clientes(cpf);
CREATE INDEX IF NOT EXISTS idx_clientes_email ON clientes(email);
CREATE INDEX IF NOT EXISTS idx_clientes_created_at ON clientes(created_at);

-- Criar função para atualizar o campo updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Criar trigger para atualizar updated_at automaticamente
CREATE TRIGGER update_clientes_updated_at 
    BEFORE UPDATE ON clientes 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Habilitar RLS (Row Level Security) - opcional, mas recomendado
ALTER TABLE clientes ENABLE ROW LEVEL SECURITY;

-- Criar política para permitir todas as operações (ajuste conforme necessário)
CREATE POLICY "Permitir todas as operações para clientes" ON clientes
    FOR ALL USING (true);

-- Comentários na tabela e colunas
COMMENT ON TABLE clientes IS 'Tabela para armazenar dados dos clientes cadastrados';
COMMENT ON COLUMN clientes.id IS 'Identificador único do cliente';
COMMENT ON COLUMN clientes.nome IS 'Nome completo do cliente';
COMMENT ON COLUMN clientes.cpf IS 'CPF do cliente (único)';
COMMENT ON COLUMN clientes.rg IS 'RG do cliente';
COMMENT ON COLUMN clientes.orgao_emissor IS 'Órgão emissor do RG';
COMMENT ON COLUMN clientes.estado IS 'Estado onde foi emitido o RG';
COMMENT ON COLUMN clientes.email IS 'Email do cliente';
COMMENT ON COLUMN clientes.telefone IS 'Telefone do cliente';
COMMENT ON COLUMN clientes.profissao IS 'Profissão do cliente';
COMMENT ON COLUMN clientes.data_nascimento IS 'Data de nascimento do cliente';
COMMENT ON COLUMN clientes.estado_civil IS 'Estado civil do cliente';
COMMENT ON COLUMN clientes.created_at IS 'Data e hora de criação do registro';
COMMENT ON COLUMN clientes.updated_at IS 'Data e hora da última atualização do registro';

