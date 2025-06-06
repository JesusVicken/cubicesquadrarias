'use client'

import Image from 'next/image'
import React from 'react'

import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr"

export default function Hero() {
    return (
        <section className="relative w-full h-[60vh] md:h-[70vh]">
            {/* Imagem de fundo */}
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

            {/* Overlay escuro */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />

            {/* Conteúdo */}
            <div className="relative z-10 container mx-auto h-full flex items-center px-4 md:px-6 lg:px-8">
                <div className="max-w-2xl text-white space-y-4">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        Soluções em Esquadrias de Alta Qualidade
                    </h1>
                    <p className="text-lg md:text-xl opacity-90 max-w-lg">
                        Projetos personalizados e instalações profissionais para seu projeto
                    </p>
                    <a
                        href="https://wa.me/5561981778422?text=Olá, vim pelo site e gostaria de solicitar um orçamento."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-flex items-center gap-2 px-8 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition-colors"
                    >
                        <WhatsappLogoIcon className="w-5 h-5" />
                        Solicitar Orçamento
                    </a>
                </div>
            </div>
        </section>
    )
}
