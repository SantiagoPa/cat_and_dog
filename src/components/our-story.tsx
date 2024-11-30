import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from 'lucide-react'

interface OurStoryProps {
  onClose: () => void;
}

export function OurStory({ onClose }: OurStoryProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Nuestra Historia</h3>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Cat and Dog nació en 2010 de la pasión de dos amigos por el bienestar de las mascotas. 
          Empezamos en un pequeño taller, diseñando pecheras cómodas y seguras para nuestros propios 
          perros y gatos. Pronto, amigos y vecinos empezaron a pedirnos pecheras para sus mascotas.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Con el tiempo, nuestra dedicación a la calidad y el confort nos llevó a expandirnos. 
          Hoy, Cat and Dog es una marca reconocida en toda España, pero mantenemos el mismo 
          compromiso con la comodidad y seguridad de cada mascota que tuvimos desde el primer día.
        </p>
        <p className="text-gray-700 dark:text-gray-300">
          Nuestra misión es simple: hacer que cada paseo, cada aventura, sea lo más cómoda y 
          segura posible para las mascotas y sus dueños. Porque para nosotros, las mascotas 
          son familia, y se merecen lo mejor.
        </p>
      </CardContent>
    </Card>
  )
}

