import React from 'react'
import ReactDOM from 'react-dom/client'
import { DcpButton } from '@codecompanybrasil/discipline-core'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <div>
            <h2>Botão com cor padrão (primary)</h2>
            <DcpButton text='Enviar' />
        </div>
        <hr />
        <div>
            <h2>Botão com cor definida (accent color)</h2>
            <DcpButton text='Enviar' color='accent' />
        </div>
    </React.StrictMode>,
)
