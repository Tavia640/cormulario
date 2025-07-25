# Configuração do Supabase

## Passos para configurar o Supabase:

### 1. Criar conta no Supabase
- Acesse https://supabase.com
- Crie uma conta gratuita
- Crie um novo projeto

### 2. Obter credenciais
- No dashboard do seu projeto, vá em Settings > API
- Copie a `Project URL` e a `anon public` key

### 3. Configurar no projeto
- Abra o arquivo `src/lib/supabase.js`
- Substitua:
  - `https://your-project-ref.supabase.co` pela sua Project URL
  - `your-anon-key` pela sua anon public key

### 4. Criar tabela no banco de dados
- No dashboard do Supabase, vá em SQL Editor
- Execute o script que está no arquivo `supabase-setup.sql`

### 5. Configurar políticas de segurança (RLS)
- Vá em Authentication > Policies
- Crie políticas para permitir INSERT, SELECT, UPDATE e DELETE na tabela `clientes`
- Para desenvolvimento, você pode desabilitar RLS temporariamente

### 6. Testar a aplicação
- Execute `pnpm run dev`
- Teste o formulário de cadastro
- Verifique se os dados estão sendo salvos na tabela `clientes`

## Exemplo de configuração:

```javascript
// src/lib/supabase.js
const supabaseUrl = 'https://xyzcompany.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'
```

## Estrutura da tabela clientes:

```sql
CREATE TABLE clientes (
  id BIGSERIAL PRIMARY KEY,
  nome TEXT NOT NULL,
  cpf TEXT NOT NULL,
  rg TEXT NOT NULL,
  orgao_emissor TEXT NOT NULL,
  estado TEXT NOT NULL,
  email TEXT NOT NULL,
  telefone TEXT NOT NULL,
  profissao TEXT NOT NULL,
  data_nascimento DATE NOT NULL,
  estado_civil TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

