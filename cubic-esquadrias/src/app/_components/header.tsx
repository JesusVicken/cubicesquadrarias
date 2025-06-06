'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    return (
        <header className="w-full h-[72px] bg-background/90 backdrop-blur sticky top-0 z-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-full">
                {/* Logo com recorte e centralização */}
                <Link href="/" className="flex items-center h-full overflow-hidden">
                    <div className="flex items-center h-full">
                        <Image
                            src="/logobran.png"
                            alt="Logo"
                            width={600}
                            height={200}
                            className="h-32 w-auto object-contain"
                            priority
                        />
                    </div>
                </Link>

                {/* Navegação Desktop */}
                <nav className="hidden md:flex gap-6 items-center ml-6">
                    <Link href="/">
                        <Button variant="ghost" className="text-base">
                            Início
                        </Button>
                    </Link>
                    <Link href="/sobre">
                        <Button variant="ghost" className="text-base">
                            Sobre
                        </Button>
                    </Link>
                    <Link href="/contato">
                        <Button variant="ghost" className="text-base">
                            Contato
                        </Button>
                    </Link>
                </nav>

                {/* Ícone do Menu Mobile */}
                <div className="md:hidden flex items-center gap-2">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Abrir menu"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </Button>
                </div>
            </div>

            {/* Menu Mobile */}
            {mobileMenuOpen && (
                <nav className="md:hidden bg-background/90 backdrop-blur border-t border-gray-200">
                    <div className="max-w-7xl mx-auto px-4 py-2 flex flex-col gap-2">
                        <Link href="/">
                            <Button variant="ghost" className="w-full text-left">
                                Início
                            </Button>
                        </Link>
                        <Link href="/sobre">
                            <Button variant="ghost" className="w-full text-left">
                                Sobre
                            </Button>
                        </Link>
                        <Link href="/contato">
                            <Button variant="ghost" className="w-full text-left">
                                Contato
                            </Button>
                        </Link>
                    </div>
                </nav>
            )}
        </header>
    )
}
