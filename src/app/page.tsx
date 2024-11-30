"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PawPrintIcon as Paw, Heart, Shield } from "lucide-react";
import { useState } from "react";
import { OurStory } from "@/components/our-story";
import { WhyChooseUs } from "@/components/why-choose-us";

import Poster from "@/app/assets/poster.jpg";
import PecheraDog from "@/app/assets/pechera_perro.webp";
import PecheraCat from "@/app/assets/pechera_gato.jpg";

export default function LandingPage() {
  const [showOurStory, setShowOurStory] = useState(false);
  const [showWhyChooseUs, setShowWhyChooseUs] = useState(false);
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Paw className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">Cat and Dog</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#products"
          >
            Productos
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#about"
          >
            Nosotros
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contacto
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[url('/hero-background.jpg')] bg-cover bg-center">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Pecheras cómodas para tus mascotas
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Descubre nuestra colección de pecheras para perros y gatos.
                  Comodidad y estilo para tus compañeros peludos.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="products"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800"
        >
          <div className="px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Nuestros Productos
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 place-content-center">
              <Card
                className="flex flex-row justify-center align-middle"
                // style={{ backgroundColor: "hsl(222.2 47.4% 11.2%)" }}
              >
                <CardContent className="p-4">
                  <Image
                    src={PecheraDog}
                    alt="Pechera para perro"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Pechera para Perro
                    </h3>
                    <p className="">
                      Cómoda y resistente, perfecta para paseos.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card
                className="flex flex-row justify-center align-middle"
                // style={{ backgroundColor: "hsl(222.2 47.4% 11.2%)" }}
              >
                <CardContent className="p-4">
                  <Image
                    src={PecheraCat}
                    alt="Pechera para gato"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Pechera para Gato
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      Ligera y segura, ideal para aventuras felinas.
                    </p>
                  </div>
                </CardContent>
              </Card>
              {/* <Card>
                <CardContent className="p-4">
                  <Image
                    src="/pechera-personalizada.jpg"
                    alt="Pechera personalizada"
                    width={300}
                    height={200}
                    className="rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">
                    Pechera Personalizada
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Diseña la pechera perfecta para tu mascota.
                  </p>
                </CardContent>
              </Card> */}
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]">
              <Image
                src={Poster}
                alt="Sobre nosotros"
                width={550}
                height={550}
                className="mx-auto overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Sobre Cat and Dog
                  </h2>
                  <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                    En Cat and Dog, nos apasiona proporcionar a tus mascotas la
                    mejor comodidad y seguridad. Nuestras pecheras están
                    diseñadas pensando en el bienestar de tus compañeros
                    peludos.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    className="inline-flex items-center justify-center"
                    onClick={() => {
                      setShowOurStory(true);
                      setShowWhyChooseUs(false);
                    }}
                  >
                    <Heart className="mr-2 h-4 w-4" />
                    Nuestra historia
                  </Button>
                  <Button
                    variant="outline"
                    className="inline-flex items-center justify-center"
                    onClick={() => {
                      setShowWhyChooseUs(true);
                      setShowOurStory(false);
                    }}
                  >
                    <Paw className="mr-2 h-4 w-4" />
                    Por qué elegirnos
                  </Button>
                </div>
              </div>
            </div>
            {showOurStory && (
              <OurStory onClose={() => setShowOurStory(false)} />
            )}
            {showWhyChooseUs && (
              <WhyChooseUs onClose={() => setShowWhyChooseUs(false)} />
            )}
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              ¿Por qué elegir nuestras pecheras?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Shield className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Seguridad</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Diseñadas para mantener a tu mascota segura en todo momento.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Heart className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Comodidad</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Materiales suaves y ajustables para el máximo confort.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <Paw className="h-12 w-12 mb-4 text-primary" />
                  <h3 className="text-xl font-bold mb-2">Estilo</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Diseños modernos que harán lucir genial a tu mascota.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contáctanos
                </h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  ¿Tienes preguntas? Estamos aquí para ayudarte. Envíanos un
                  mensaje y te responderemos lo antes posible.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <article
                  className="content_article text-white"
                >
                  <h4>WhatsApp</h4>
                  <h5>+57 324 5647734</h5>
                  <a
                    className=""
                    href="https://api.whatsapp.com/send?phone=573245647734"
                    target="_blank"
                  >
                    Send a message
                  </a>
                </article>
                {/* <form className="flex flex-col space-y-4">
                  <Input placeholder="Tu nombre" />
                  <Input type="email" placeholder="Tu email" />
                  <textarea
                    className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tu mensaje"
                  ></textarea>
                  <Button type="submit">
                    <Mail className="mr-2 h-4 w-4" />
                    Enviar mensaje
                  </Button>
                </form> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">
          © 2024 Cat and Dog. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
