import { useEffect, useState } from 'react'
import Background from '../public/img.png';

const App = () => {

  const [isdate, setData] = useState();

  useEffect(() => {
    const RickyAPI = async () => {
      const response = await fetch('https://rickandmortyapi.com/api/character');
      if (!response.ok) {
        throw new Error(`Err Search at API`);
      }
      const data = await response.json();
      console.log(data);
      setData(data.results);
    }
    RickyAPI();
  }, [])

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

  return (
    <main className='w-full min-h-screen flex flex-col justify-center text-white'>
      {isdate ?

        (
          <>
            <section className='relative flex flex-col justify-center items-center h-[20rem]'>
              <img className='w-full h-full object-cover' src="./bg.png" alt="" />
              <h1 className='absolute text-5xl font-bold'>The Rick and Morty API</h1>
            </section>
            <section className='flex justify-center w-full flex-wrap overflow-auto gap-12 py-[8rem] md:px-[12rem]'>
              {isdate.map((item: any) => (
                <div
                  className="flex flex-col justify-between border-4 border-black shrink-0 grow-0 h-[25rem] basis-[20rem] rounded-xl bg-white text-white p-4"
                >
                  <div className="w-full h-[60%]  overflow-hidden">
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
              ))}
            </section>
          </>
        )
        : (
          <section>
            <h1>Carregando...</h1>
          </section>
        )}
    </main>
  )
}

export default App;
