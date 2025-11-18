'use client'
import { useState } from 'react'

export default function Chat() {
    const [inputText, setInputText] = useState('')
    const [conversation, setConversation] = useState([])

    const getResponse = async () => {
        try {
            let response = await fetch('/api/ai-response', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ prompt: inputText }),
            })

            if(!response.ok) {
                const errorText = await response.text()
                throw new Error(`Server error ${response.status}: ${errorText}`)
            }
            let data = await response.json()
            setConversation(prev => [...prev, data.response])
        } catch(e) {
            console.error('Error:', e)
            setConversation(prev => [...prev, 'Failed to fetch response'])
        }
    };

    const submit = async () => {
        if(!inputText.trim()) return
        setConversation(prev => [...prev, inputText.trim()])
        setInputText('')
        await getResponse()
    }

    return (
        <main className='min-h-screen text-white'>
            <section className='p-8 max-w-[900px] mx-auto my-8 min-h-[calc(100vh-4rem-2rem)] flex flex-col justify-between bg-[#DACBEA]/20 border border-white/20 bg-opacity-25 rounded-2xl shadow-lg backdrop-blur-lg overflow-hidden'>
                <div className='flex-grow overflow-y-scroll p-4 flex flex-col gap-4 text-gray-100 max-h-[700px]'>
                    {conversation.map((message, index) => (
                        <div key={index} className={index % 2 === 0 ? 'p-3 px-5 rounded-[1.2rem] max-w-[75%] shadow-md break-words leading-[1.5] bg-[#D191DC] self-end rounded-br-[0.4rem] ml-auto' : 
                        'p-3 px-5 rounded-[1.2rem] max-w-[75%] shadow-md break-words leading-[1.5] bg-[#D191DC] self-start rounded-bl-[0.4rem] mr-auto'}>
                            {message}
                        </div>
                    ))}
                </div>
                <div className='flex gap-4 py-2 pt-5 items-center bg-transparent'>
                    <input className="flex-grow bg-[#F9F4FB]/50 border-white/25 rounded-[0.7rem] py-3 px-5 focus:bg-[#F9F4FB]/50 focus:border-white focus:shadow-md" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} 
                    onKeyUp={(e) => {if (e.key === 'Enter') submit()}} placeholder="How can I help you today?" />
                    <button type="submit" onClick={submit} className="flex-shrink-0 py-3 px-7 text-base bg-[#7E5BD2] text-white shadow-none rounded-[0.7rem] hover:bg-[#9384E6] hover:-translate-y-px transition-all duration-200 ease-in-out active:translate-y-0">
                        Submit
                    </button>
                </div>
            </section>
        </main>
    )
}