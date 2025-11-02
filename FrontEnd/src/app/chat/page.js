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
        <main className='min-h-screen bg-blue-400 text-white'>
            <section>
                <div>
                    {conversation.map((message, index) => (
                        <div key={index} className={index % 2 === 0 ? 'p-3 px-5 rounded-[1.2rem] max-w-[75%] shadow-md break-words leading-[1.5] bg-[#dea9ed] self-end rounded-br-[0.4rem] ml-auto' : 
                        'p-3 px-5 rounded-[1.2rem] max-w-[75%] shadow-md break-words leading-[1.5] bg-[#dea9ed] self-start rounded-bl-[0.4rem] mr-auto'}>
                            {message}
                        </div>
                    ))}
                </div>
                <div>
                    <input className="outline-1 outline-black rounded-md" type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} 
                    onKeyUp={(e) => {if (e.key === 'Enter') submit()}} placeholder="How can I help you today?" />
                    <button type="submit" onClick={submit} className="focus:outline-none text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                        Submit
                    </button>
                </div>
            </section>
        </main>
    )
}