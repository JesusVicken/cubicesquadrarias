'use client'

import Image from 'next/image'
import React from 'react'

export default function Hero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh]">
            {/* Imagem de fundo - agora com max-h e object-position ajustado */}
            <div className="absolute inset-0 w-full h-full overflow-hidden">
                <Image
                    src="/Hero.jpg"
                    alt="Imagem de fundo"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={100}
                />
            </div>

            {/* Overlay mais suave */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

            {/* Conteúdo centralizado à esquerda como no Talentus */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-6 lg:px-8">
                <div className="max-w-2xl text-white space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Soluções em Esquadrias de Alta Qualidade
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-lg">
                        Projetos personalizados e instalações profissionais para seu projeto
                    </p>
                    <button className="mt-6 px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition-colors">
                        Solicitar Orçamento
                    </button>
                </div>
            </div>
        </section>
    )
}