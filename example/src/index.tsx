import React from 'react'
import ReactDOM from 'react-dom/client'
import { DcpButton } from '@codecompanybrasil/discipline-core'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <section id="font-examples">
            <h1>Fontes</h1>
            <div className="lato">
                <h2>Lato</h2>
                <p className='wght-400'>Lato Regular</p>
                <p className='wght-700'>Lato Bold</p>
            </div>
            <hr />
            <div className="roboto">
                <h2>Roboto</h2>
                <p className='wght-400'>Roboto Regular</p>
                <p className='wght-700'>Roboto Bold</p>
            </div>
            <hr />
            <div className="source-sans-3">
                <h2>Source Sans 3</h2>
                <p className='wght-400'>Source Sans 3 Regular</p>
                <p className='wght-400 italic'>Source Sans 3 Regular Itálico</p>
                <p className='wght-600'>Source Sans 3 SemiBold</p>
                <p className='wght-600 italic'>Source Sans 3 SemiBold Itálico</p>
                <p className='wght-700'>Source Sans 3 Bold</p>
            </div>
        </section>

        <section id="buttons">
            <h1>Botões</h1>
            <div>
                <h2>Botão com cor padrão (primary)</h2>
                <DcpButton text='Enviar' />
            </div>
            <hr />
            <div>
                <h2>Botão com cor definida (accent color)</h2>
                <DcpButton text='Enviar' color='accent' />
            </div>
        </section>
    </React.StrictMode>,
)
