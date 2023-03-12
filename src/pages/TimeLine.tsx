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

      {
        tweets.map(tweet => (
          <Tweet 
            key={tweet}
            content={tweet}
          />
        ))
      }

    </main>
  );
}
