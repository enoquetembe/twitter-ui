import Shelcia from '../assets/shelcia.png'
import Adil from '../assets/adil.png'
import Luzidio from '../assets/luzidio.png'

import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Line } from "../components/Line";
import { Tweet } from "../components/Tweet";

export function TimeLine() {
  const [tweets, setTweets] = useState(['Meu primeiro tweet', 'Tweetar é mng nice', 'Deu certo tweet'])
  const [newTweet, setNewTweet] = useState('')

  function handleNewTweet(event: FormEvent) {
    event.preventDefault()

    if(!newTweet) {
      return alert('Twitter is empty.')
    }
    setTweets([newTweet, ...tweets])
    setNewTweet('')
  }

  return (
    <main className="">
      <Header title="Header" />

      <form 
        onSubmit={handleNewTweet}
        className="px-8 py-5 flex flex-col gap-2"
      >
        <label htmlFor="tweet" className="flex gap-3">
          <img
            src="https://github.com/enoquetembe.png"
            alt="Enoque Tembe"
            className="w-12 h-12 rounded-[999px]"
          />

          <textarea
            id="tweet"
            placeholder="What's happening"
            className="bg-twitter-black-900 flex-1 text-xl font-medium mt-3 resize-none focus:outline-none placeholder:text-gray-700"
            onChange={e => setNewTweet(e.target.value)}
            value={newTweet}
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-24 ml-auto p-4 bg-twitter-blue rounded-[9999px] text-4 text-white font-black hover:brightness-90"
        >
          Tweet
        </button>
      </form>

      <Line />

      {/* {
        tweets.map(tweet => (
          <Tweet 
            key={tweet}
            content={tweet}
          />
        ))
      } */}

    <Tweet 
      name='Enoque Tembe' 
      user='enoquetembe' 
      content="Acabei de migrar um projeto React GIGANTE de create-react-app para Vite e os resultados foram: 

      ✅ npm start: De 32s para 400ms (sim, demorava 30s) 
      ✅ npm build: De 120s para 22s
      
      Além disso, troquei do Yarn para o PNPM e o install das deps mudou de 24s para 8s 🔥" 
      imageUrl='https://github.com/enoquetembe.png'
    />
    
    <Tweet 
      name='Shelcia Miguel'
      user='shemi' 
      content="Estamos vivendo um momento interessante no mercado de startups. 

      Soluções que resolvem problemas de forma semelhante, mas com precificação mais simples, usabilidade e foco em dev first. 
      
      Tudo começa com um projeto open source/free 👀" 
      imageUrl={Shelcia}
    />

    <Tweet 
      name='Adil Jamal'
      user='mulato' 
      content="Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias. 

      Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev" 
      imageUrl={Adil}
    />

    <Tweet 
      name='Luzidio Rafael'
      user='dono_delas' 
      content="Se você quer se destacar no universo da programação web, é importante manter-se atualizado com as últimas tendências e tecnologias. 

      Participe de conferências, siga blogs e sites de tecnologia, e junte-se a comunidades online para aprimorar suas habilidades #programação #webdev" 
      imageUrl={Luzidio}
    />

    <Tweet 
      name='Rodrigues Fundo'
      user='maza' 
      content="Se você quer aprender a programar Android em 2023, Kotlin seria a melho
      tecnologia para você começar" 
      imageUrl='https://github.com/RodriguesFundo.png'
    />

    </main>
  );
}
