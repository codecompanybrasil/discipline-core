import React from 'react'
import ReactDOM from 'react-dom/client'
import { DcpButton, DcpIcon, DcpLink } from '@codecompanybrasil/discipline-core'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <React.StrictMode>
        <h1>Discipline Examples</h1>

        <section id='font-examples'>
            <h2>Fonte</h2>
            <div className='source-sans-3'>
                <h3>Source Sans 3</h3>
                <p className='wght-400'>Source Sans 3 Regular</p>
                <p className='wght-400 italic'>Source Sans 3 Regular Itálico</p>
                <p className='wght-600'>Source Sans 3 SemiBold</p>
                <p className='wght-600 italic'>Source Sans 3 SemiBold Itálico</p>
                <p className='wght-700'>Source Sans 3 Bold</p>
            </div>
        </section>

        <section id='buttons'>
            <h2>Botões</h2>
            <div>
                <h3>Botão com cor padrão (primary)</h3>
                <DcpButton
                    text='Enviar'
                    onClick={() => confirm('Tem certeza que deseja continuar?')} />
            </div>
            <hr />
            <div>
                <h3>Botão com cor definida (accent color)</h3>
                <DcpButton
                    text='Enviar'
                    color='accent'
                    onClick={() => alert('Teste de click em button')} />
            </div>
            <hr />
            <div>
                <h3>Botão com cor definida (accent color) com ícone no slot start</h3>
                <DcpButton
                    text='Enviar'
                    color='accent'
                    onClick={() => alert('Teste de click em button')}
                    slotStart={<DcpIcon.Filter />} />
            </div>
            <hr />
            <div>
                <h3>Botão com cor definida (accent color) com ícone no slot end</h3>
                <DcpButton
                    text='Enviar'
                    color='accent'
                    onClick={() => alert('Teste de click em button')}
                    slotEnd={<DcpIcon.Filter />} />
            </div>
        </section>

        <section id='link'>
            <h2>Links</h2>
            <div>
                <h3>Link com cor padrão (primary) e target _blank</h3>
                <DcpLink
                    text='Link externo com target blank'
                    href='https://www.google.com/'
                    target='_blank' />
            </div>
            <hr />
            <div>
                <h3>Link com cor definida (accent color)</h3>
                <DcpLink
                    text='Link com Onclick'
                    color='accent'
                    onClick={() => alert('Teste de click em link')} />
            </div>
            <hr />
            <div>
                <h3>Link com cor definida (accent color) com ícone no slot start</h3>
                <DcpLink
                    text='Enviar'
                    color='accent'
                    onClick={() => alert('Teste de click em button')}
                    slotStart={<DcpIcon.Filter />} />
            </div>
            <hr />
            <div>
                <h3>Link com cor definida (accent color) com ícone no slot end</h3>
                <DcpLink
                    text='Enviar'
                    color='accent'
                    onClick={() => alert('Teste de click em button')}
                    slotEnd={<DcpIcon.Filter />} />
            </div>
        </section>
    </React.StrictMode>,
)
