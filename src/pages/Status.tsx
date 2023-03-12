import { FormEvent, useState } from "react";
import { Header } from "../components/Header";
import { Line } from "../components/Line";
import { Tweet } from "../components/Tweet";

export function Status() {
  const [answers, setAnswers] = useState(['Great', 'Wow, amazing', 'Pretty coooooool!'])
  const [newAnswer, setNewAnswer] = useState('')


  function handleNewAnswer(event: FormEvent) {
    event.preventDefault()

    if(!newAnswer) {
      return alert('Answer is empty!')
    }

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  return (
    <main className="">
      <Header title="Tweet" />

      <Tweet content="Tweet 1" />

      <Line />

      <form
        onSubmit={handleNewAnswer}
        className="px-8 py-5 flex items-center border-b border-twitter-black-secondary gap-2"
      >
        <label htmlFor="tweet" className="flex flex-1 items-center gap-3">
          <img
            src="https://github.com/enoquetembe.png"
            alt="Enoque Tembe"
            className="w-12 h-12 rounded-[999px]"
          />

          <textarea
            id="tweet"
            placeholder="Tweet you answer"
            className="bg-twitter-black-900 flex-1 text-xl font-medium mt-5 resize-none focus:outline-none placeholder:text-gray-700"
            onChange={e => setNewAnswer(e.target.value)}
            value={newAnswer}
          ></textarea>
        </label>

        <button
          type="submit"
          className="w-24 ml-auto p-4 bg-twitter-blue rounded-[9999px] text-4 text-white font-black hover:brightness-90"
        >
          Answer
        </button>
      </form>

      {
        answers.map(answer =>(
          <Tweet content={answer}/>
        ))
      }
    </main>
  );
}
