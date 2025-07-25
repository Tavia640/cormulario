import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { ArrowLeft, CheckCircle, AlertCircle } from 'lucide-react'
import { inserirCliente } from '../lib/supabase.js'

function CadastroCliente() {
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    rg: '',
    orgao_emissor: '',
    estado: '',
    email: '',
    telefone: '',
    profissao: '',
    data_nascimento: '',
    estado_civil: ''
  })

  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: '', text: '' })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: '', text: '' })

    try {
      // Preparar dados para o Supabase
      const dadosParaSupabase = {
        nome: formData.nome,
        cpf: formData.cpf,
        rg: formData.rg,
        orgao_emissor: formData.orgao_emissor,
        estado: formData.estado,
        email: formData.email,
        telefone: formData.telefone,
        profissao: formData.profissao,
        data_nascimento: formData.data_nascimento,
        estado_civil: formData.estado_civil
      }

      // Inserir no Supabase
      const resultado = await inserirCliente(dadosParaSupabase)
      
      setMessage({ 
        type: 'success', 
        text: 'Cliente cadastrado com sucesso! Redirecionando para Ficha de Negociação...' 
      })

      // Limpar formulário após sucesso
      setTimeout(() => {
        setFormData({
          nome: '',
          cpf: '',
          rg: '',
          orgao_emissor: '',
          estado: '',
          email: '',
          telefone: '',
          profissao: '',
          data_nascimento: '',
          estado_civil: ''
        })
        setMessage({ type: '', text: '' })
      }, 3000)

    } catch (error) {
      console.error('Erro ao cadastrar cliente:', error)
      setMessage({ 
        type: 'error', 
        text: 'Erro ao cadastrar cliente. Verifique suas credenciais do Supabase e tente novamente.' 
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-6">
          <Button variant="outline" className="mb-4 bg-green-100 border-green-300 text-green-700 hover:bg-green-200">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar
          </Button>
          <h1 className="text-2xl font-bold text-center text-gray-800">Cadastro do Cliente</h1>
        </div>

        {/* Message */}
        {message.text && (
          <div className={`mb-4 p-4 rounded-lg flex items-center ${
            message.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-300' 
              : 'bg-red-100 text-red-700 border border-red-300'
          }`}>
            {message.type === 'success' ? (
              <CheckCircle className="w-5 h-5 mr-2" />
            ) : (
              <AlertCircle className="w-5 h-5 mr-2" />
            )}
            {message.text}
          </div>
        )}

        {/* Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-6 text-gray-700">Dados Pessoais</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Row 1: Nome e CPF */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="nome" className="text-blue-600 font-medium">Nome</Label>
                <Input
                  id="nome"
                  type="text"
                  value={formData.nome}
                  onChange={(e) => handleInputChange('nome', e.target.value)}
                  className="border-orange-300 focus:border-orange-500 focus:ring-orange-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="cpf" className="text-purple-600 font-medium">CPF</Label>
                <Input
                  id="cpf"
                  type="text"
                  value={formData.cpf}
                  onChange={(e) => handleInputChange('cpf', e.target.value)}
                  className="border-cyan-300 focus:border-cyan-500 focus:ring-cyan-200"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Row 2: RG, Órgão Emissor, Estado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="rg" className="text-pink-600 font-medium">RG</Label>
                <Input
                  id="rg"
                  type="text"
                  value={formData.rg}
                  onChange={(e) => handleInputChange('rg', e.target.value)}
                  className="border-purple-300 focus:border-purple-500 focus:ring-purple-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="orgao_emissor" className="text-orange-600 font-medium">Órgão Emissor</Label>
                <Input
                  id="orgao_emissor"
                  type="text"
                  value={formData.orgao_emissor}
                  onChange={(e) => handleInputChange('orgao_emissor', e.target.value)}
                  className="border-green-300 focus:border-green-500 focus:ring-green-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="estado" className="text-red-600 font-medium">Estado</Label>
                <Input
                  id="estado"
                  type="text"
                  value={formData.estado}
                  onChange={(e) => handleInputChange('estado', e.target.value)}
                  className="border-blue-300 focus:border-blue-500 focus:ring-blue-200"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Row 3: Email e Telefone */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="email" className="text-red-600 font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="border-green-300 focus:border-green-500 focus:ring-green-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="telefone" className="text-blue-600 font-medium">Telefone</Label>
                <Input
                  id="telefone"
                  type="tel"
                  value={formData.telefone}
                  onChange={(e) => handleInputChange('telefone', e.target.value)}
                  className="border-yellow-300 focus:border-yellow-500 focus:ring-yellow-200"
                  required
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Row 4: Profissão, Data de Nascimento, Estado Civil */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="profissao" className="text-purple-600 font-medium">Profissão</Label>
                <Input
                  id="profissao"
                  type="text"
                  value={formData.profissao}
                  onChange={(e) => handleInputChange('profissao', e.target.value)}
                  className="border-cyan-300 focus:border-cyan-500 focus:ring-cyan-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="data_nascimento" className="text-orange-600 font-medium">Data de Nascimento</Label>
                <Input
                  id="data_nascimento"
                  type="date"
                  value={formData.data_nascimento}
                  onChange={(e) => handleInputChange('data_nascimento', e.target.value)}
                  className="border-purple-300 focus:border-purple-500 focus:ring-purple-200"
                  required
                  disabled={isLoading}
                />
              </div>
              <div>
                <Label htmlFor="estado_civil" className="text-green-600 font-medium">Estado Civil</Label>
                <Select 
                  onValueChange={(value) => handleInputChange('estado_civil', value)}
                  disabled={isLoading}
                  value={formData.estado_civil}
                >
                  <SelectTrigger className="border-green-300 focus:border-green-500 focus:ring-green-200">
                    <SelectValue placeholder="Selecione" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="solteiro">Solteiro</SelectItem>
                    <SelectItem value="casado">Casado</SelectItem>
                    <SelectItem value="divorciado">Divorciado</SelectItem>
                    <SelectItem value="uniao-estavel">União Estável</SelectItem>
                    <SelectItem value="desquitado">Desquitado</SelectItem>
                    <SelectItem value="separado">Separado</SelectItem>
                    <SelectItem value="viuvo">Viúvo</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-6">
              <Button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg font-medium disabled:opacity-50"
                disabled={isLoading}
              >
                {isLoading ? 'Salvando...' : 'Continuar para Ficha de Negociação'}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CadastroCliente

