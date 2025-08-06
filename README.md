# 🚀 RickyAPI - Rick and Morty Character Gallery

Um projeto React que consome a **Rick and Morty API** para exibir uma galeria de personagens da série, utilizando conceitos modernos do React como Hooks (`useState`, `useEffect`) e Promises para requisições assíncronas.

## 📋 Sobre o Projeto

Este projeto foi desenvolvido como uma aplicação que demonstra o uso de:
- **React Hooks** (`useState`, `useEffect`)
- **Async/Await** com Promises para requisições HTTP
- **Consumo de API REST**
- **Tailwind CSS** para estilização responsiva
- **TypeScript** para tipagem (parcial)

A aplicação exibe todos os personagens da primeira página da Rick and Morty API em um layout de cards responsivo, mostrando imagem, nome e status de cada personagem.

## 🎯 Funcionalidades

- ✅ Carregamento de personagens da API
- ✅ Exibição em cards com imagem, nome e status
- ✅ Indicadores visuais coloridos para status (vivo, morto, desconhecido)
- ✅ Layout responsivo com Tailwind CSS
- ✅ Loading state durante a requisição
- ✅ Tratamento de erros na requisição
- ✅ Header com imagem de fundo temática

## 🛠️ Tecnologias Utilizadas

- **React** - Biblioteca JavaScript para construção da interface
- **Vite** - Build tool e bundler
- **TypeScript** - Superset JavaScript com tipagem estática
- **Tailwind CSS** - Framework CSS utilitário para estilização
- **Rick and Morty API** - API REST para dados dos personagens

## 📡 API Utilizada

Este projeto consome a **Rick and Morty API**:
- **Base URL:** `https://rickandmortyapi.com/api`
- **Endpoint principal:** `/character`
- **Documentação:** [rickandmortyapi.com](https://rickandmortyapi.com)

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Instalação e Execução

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/HenryCauan/RickyAPI.git
   cd RickyAPI
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Execute o projeto em modo de desenvolvimento:**
   ```bash
   npm run dev
   # ou
   yarn dev
   ```

4. **Acesse no navegador:**
   ```
   http://localhost:5173
   ```

## 📁 Estrutura do Projeto

```
RickyAPI/
├── public/
│   ├── vite.svg
│   └── bg.png
├── src/
│   ├── App.tsx
│   ├── App.css
│   ├── index.css
│   └── main.tsx
├── package.json
├── tailwind.config.js
└── README.md
```

## 💡 Conceitos Demonstrados

### React Hooks

### React Hooks

**useState para gerenciar dados dos personagens:**
```javascript
const [isdate, setData] = useState();
```

**useEffect para carregar dados na montagem do componente:**
```javascript
useEffect(() => {
  const RickyAPI = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    if (!response.ok) {
      throw new Error(`Err Search at API`);
    }
    const data = await response.json();
    setData(data.results);
  }
  RickyAPI();
}, [])
```

### Async/Await com Tratamento de Erros

```javascript
const RickyAPI = async () => {
  const response = await fetch('https://rickandmortyapi.com/api/character');
  if (!response.ok) {
    throw new Error(`Err Search at API`);
  }
  const data = await response.json();
  console.log(data);
  setData(data.results);
}
```

### Função Utilitária para Status

```javascript
const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case 'alive':
      return 'bg-green-500';
    case 'dead':
      return 'bg-red-500';
    case 'unknown':
      return 'bg-gray-500';
    default:
      return 'bg-gray-500';
  }
};
```

### Renderização Condicional

```javascript
{isdate ? (
  // Renderiza a galeria de personagens
  <section className='flex justify-center w-full flex-wrap...'>
    {isdate.map((item: any) => (
      // Card do personagem
    ))}
  </section>
) : (
  // Estado de loading
  <section>
    <h1>Carregando...</h1>
  </section>
)}
```

## 📚 Aprendizados

Este projeto aborda conceitos fundamentais do React e desenvolvimento web:

- **Gerenciamento de Estado** com `useState`
- **Efeitos Colaterais** com `useEffect`
- **Requisições HTTP** com `fetch()` e async/await
- **Tratamento de Erros** em requisições
- **Renderização Condicional** baseada no estado
- **Manipulação de Arrays** com `.map()`
- **Tailwind CSS** para estilização utilitária
- **TypeScript** básico para tipagem
- **Componentização** e organização de código

## 🎨 Características Visuais

- **Header temático** com imagem de fundo
- **Cards responsivos** com flexbox
- **Indicadores coloridos** para status dos personagens:
  - 🟢 Verde: Vivo (alive)
  - 🔴 Vermelho: Morto (dead)  
  - ⚪ Cinza: Desconhecido (unknown)
- **Layout adaptável** para diferentes tamanhos de tela

## 🎨 Screenshots

<img width="1750" height="1000" alt="Image" src="https://github.com/user-attachments/assets/a166fd90-f84e-4d37-ac29-17d9a2c2fba4" />

## 🤝 Como Contribuir

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Henry Cauan**
- GitHub: [@HenryCauan](https://github.com/HenryCauan)

## 🙏 Agradecimentos

- [Rick and Morty API](https://rickandmortyapi.com) pela API gratuita
- Comunidade React pela documentação e recursos
- Adult Swim pela série incrível

---

⭐ **Se este projeto te ajudou, deixe uma star!** ⭐
