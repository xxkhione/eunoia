'use client'
import { useState } from 'react'

export default function Chat() {
    const [text, setText] = useState('')
    const [response, setResponse] = useState(null)

    const getResponse = async () => {
        try {
            let response = await fetch('/api/ai-response', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({ prompt: text }),
            })
            let data = await response.json()
            setResponse(data)
        } catch(e) {
            console.error('Error:', e)
            setResponse({ e: 'Failed to fetch' })
        }
    };

    return (
        <main className='min-h-screen bg-blue-400 text-white'>
            <section>
                <div>
                    <p>Self Note: Figure out how to have the text bubbles on opposite sides in Next.js (AI on the left side and the user's on the right side)</p>
                </div>
                <div>
                    <input className="outline outline-1 outline-black rounded-md" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Type here..." />
                    <button type="submit" onClick={getResponse} className="focus:outline-none text-white bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900">
                        Submit
                    </button>
                </div>
                {response && (
                    <div>
                        <p>{JSON.stringify(response, null, 2)}</p>
                    </div>
                )}
            </section>
        </main>
    )
}