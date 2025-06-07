'use client'

import { Building2, SquareStack, Layers } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ServicosCards() {
    return (
        <section className="py-20 bg-black">
            <div className="container mx-auto px-4 text-center">
                <div className="mb-12">
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-white">Nossos </span>
                        <span className="text-white">Segmentos</span>
                    </h2>

                    <p className="text-gray-300 max-w-3xl mx-auto text-base leading-relaxed">
                        Desenvolvemos projetos sob demanda. Fabricamos e instalamos com profissionais experientes no mercado de esquadrias, fachadas e vidros, garantindo alta qualidade em cada etapa.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[{
                        icon: <SquareStack className="w-12 h-12 text-green-500 mb-4" />,
                        title: "Esquadrias de Alumínio",
                        desc: "Produção e instalação de esquadrias de alumínio sob medida, com acabamento de alta qualidade e durabilidade para diversos tipos de projetos."
                    }, {
                        icon: <Building2 className="w-12 h-12 text-green-500 mb-4" />,
                        title: "Fachadas em ACM e Vidro",
                        desc: "Fachadas modernas com revestimento em ACM e pele de vidro, garantindo sofisticação, resistência e melhor performance térmica e acústica."
                    }, {
                        icon: <Layers className="w-12 h-12 text-green-500 mb-4" />,
                        title: "Vidros Temperados",
                        desc: "Instalação de vidros temperados para ambientes internos e externos, com segurança, transparência e excelente acabamento."
                    }].map((card, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#121212] border border-gray-800 rounded-xl p-1 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl focus-within:scale-105 focus-within:shadow-2xl cursor-pointer"
                        >
                            {/* Borda animada com ::before */}
                            <div className="absolute inset-0 rounded-xl pointer-events-none before:absolute before:inset-0 before:rounded-xl before:border-[2px] before:border-green-500 before:animate-border-draw before:opacity-0 group-hover:before:opacity-100 group-focus-within:before:opacity-100" />

                            <Card className="bg-[#121212] border-none relative z-10">
                                <CardHeader className="flex flex-col items-center">
                                    {card.icon}
                                    <CardTitle className="text-xl text-white">{card.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-300 text-sm text-justify">
                                        {card.desc}
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
