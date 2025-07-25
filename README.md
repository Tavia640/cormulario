# Clone do Sistema de Cadastro de Cliente

Este projeto é um clone do site de cadastro de cliente que se conecta com o banco de dados Supabase.

## 🚀 Funcionalidades

- ✅ Formulário de cadastro de cliente com todos os campos do site original
- ✅ Design responsivo e colorido similar ao original
- ✅ Integração com Supabase para persistência de dados
- ✅ Validação de formulário
- ✅ Feedback visual para o usuário
- ✅ Estados de loading durante o envio

## 🛠️ Tecnologias Utilizadas

- **React** - Framework frontend
- **Tailwind CSS** - Estilização
- **shadcn/ui** - Componentes de interface
- **Supabase** - Banco de dados e backend
- **Vite** - Build tool
- **Lucide React** - Ícones

## 📋 Campos do Formulário

1. **Nome** - Campo de texto obrigatório
2. **CPF** - Campo de texto obrigatório
3. **RG** - Campo de texto obrigatório
4. **Órgão Emissor** - Campo de texto obrigatório
5. **Estado** - Campo de texto obrigatório
6. **Email** - Campo de email obrigatório
7. **Telefone** - Campo de telefone obrigatório
8. **Profissão** - Campo de texto obrigatório
9. **Data de Nascimento** - Campo de data obrigatório
10. **Estado Civil** - Dropdown com opções:
    - Solteiro
    - Casado
    - Divorciado
    - União Estável
    - Desquitado
    - Separado
    - Viúvo

## 🗄️ Configuração do Banco de Dados

### 1. Configurar Supabase

1. Crie uma conta no [Supabase](https://supabase.com)
2. Crie um novo projeto
3. Anote a URL do projeto e a chave anônima (anon key)

### 2. Executar Script SQL

Execute o script `supabase-setup.sql` no SQL Editor do seu projeto Supabase para criar a tabela `clientes` com todos os campos necessários.

### 3. Configurar Credenciais

Edite o arquivo `src/lib/supabase.js` e substitua as variáveis:

```javascript
const supabaseUrl = 'SUA_URL_DO_SUPABASE'
const supabaseKey = 'SUA_CHAVE_ANONIMA_DO_SUPABASE'
```

## 🚀 Como Executar

### Pré-requisitos

- Node.js 18+ instalado
- pnpm instalado

### Instalação

```bash
# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm run dev
```

A aplicação estará disponível em `http://localhost:5173`

### Build para Produção

```bash
# Gerar build de produção
pnpm run build

# Visualizar build localmente
pnpm run preview
```

## 📁 Estrutura do Projeto

```
cadastro-cliente-clone/
├── public/                 # Arquivos estáticos
├── src/
│   ├── assets/            # Imagens e recursos
│   ├── components/
│   │   └── ui/           # Componentes shadcn/ui
│   ├── lib/
│   │   └── supabase.js   # Configuração do Supabase
│   ├── App.jsx           # Componente principal
│   ├── App.css           # Estilos da aplicação
│   ├── index.css         # Estilos globais
│   └── main.jsx          # Ponto de entrada
├── supabase-setup.sql     # Script para criar tabela no Supabase
├── package.json
└── README.md
```

## 🎨 Design

O design foi cuidadosamente recriado para ser fiel ao original, incluindo:

- Layout responsivo que funciona em desktop e mobile
- Cores vibrantes para diferentes campos do formulário
- Botão "Voltar" com estilo verde
- Botão de submit azul
- Feedback visual com ícones de sucesso/erro
- Estados de loading durante operações

## 🔧 Funcionalidades do Supabase

O arquivo `src/lib/supabase.js` inclui funções para:

- ✅ `inserirCliente()` - Inserir novo cliente
- ✅ `buscarClientes()` - Buscar todos os clientes
- ✅ `buscarClientePorId()` - Buscar cliente específico
- ✅ `atualizarCliente()` - Atualizar dados do cliente
- ✅ `deletarCliente()` - Deletar cliente

## 🔒 Segurança

- Row Level Security (RLS) configurado no Supabase
- Validação de dados no frontend
- Campos obrigatórios implementados
- Tratamento de erros adequado

## 📝 Próximos Passos

- [ ] Implementar página de "Ficha de Negociação"
- [ ] Adicionar validação de CPF
- [ ] Implementar máscara para campos (CPF, telefone)
- [ ] Adicionar paginação para listagem de clientes
- [ ] Implementar busca e filtros
- [ ] Adicionar testes unitários

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas, por favor abra uma issue no repositório do projeto.

