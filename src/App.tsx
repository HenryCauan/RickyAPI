import { useEffect, useState } from 'react'

const App = () => {
  const [isdate, setData] = useState();
  const [input, setInput] = useState('');
  const [character, setCharacter] = useState('character'); // Endpoint inicial

  useEffect(() => {
    const RickyAPI = async () => {
      try {
        // Se character for 'character', busca todos os personagens
        // Se não, busca por nome específico
        const url = character === 'character' 
          ? 'https://rickandmortyapi.com/api/character'
          : `https://rickandmortyapi.com/api/character/?name=${character}`;
        
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Erro na busca da API`);
        }
        const data = await response.json();
        console.log(data);
        setData(data.results);
      } catch (error) {
        console.error('Erro:', error);
        setData([]); // Define como array vazio em caso de erro
      }
    }
    RickyAPI();
  }, [character])

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

  const handleChange = (e) => {
    setInput(e.target.value);
  }

  const enterButton = () => {
    if (input.trim() !== '') {
      setCharacter(input.trim());
      console.log('Buscando por:', input.trim());
    } else if(input.trim() === '') {
      setCharacter('character')
    }
  }

  return (
    <main className='w-full min-h-screen flex flex-col justify-center text-white'>
      {isdate ? (
        <>
          <section className='relative flex flex-col justify-center items-center h-[30rem]'>
            <img className='w-full h-full object-cover' src="./bg.png" alt="" />
            <h1 className='absolute text-8xl font-extrabold'>The Rick and Morty API</h1>
          </section>
          <div className="flex justify-center items-center w-full gap-2">
            <input 
              className='w-1/2 h-12 my-16 px-4 border-blue-500 border-2 text-black' 
              value={input} 
              onChange={handleChange} 
              placeholder='Digite o nome do personagem' 
              type="text" 
            />
            <button onClick={enterButton} className='px-4 h-12 bg-blue-400 cursor-pointer'>Buscar</button>
          </div>
          <section className='flex justify-center w-full flex-wrap overflow-auto gap-12 py-[rem] md:px-[12rem]'>
            {isdate.length > 0 ? (
              isdate.map((item: any, index: number) => (
                <div
                  key={index}
                  className="flex flex-col justify-between border-4 border-black shrink-0 grow-0 h-[25rem] basis-[20rem] rounded-xl bg-white text-black p-4"
                >
                  <div className="w-full h-[60%] overflow-hidden">
                    <img
                      className="w-full h-full object-cover rounded-md"
                      src={item.image}
                      alt={item.name}
                    />
                  </div>
                  <h1 className='text-2xl font-bold'>{item.name}</h1>
                  <div className="flex self-center items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${getStatusColor(item.status)}`}></div>
                    <p>{item.status}</p>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-center text-white">
                <h2>Nenhum personagem encontrado</h2>
                <p>Tente buscar por outro nome</p>
              </div>
            )}
          </section>
        </>
      ) : (
        <section>
          <h1>Carregando...</h1>
        </section>
      )}
    </main>
  )
}

export default App;
