import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X } from "lucide-react"

interface WhyChooseUsProps {
  onClose: () => void;
}

export function WhyChooseUs({ onClose }: WhyChooseUsProps) {
  return (
    <Card className="w-full max-w-2xl mx-auto mt-8">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-2xl font-bold">Por qué elegirnos</h3>
          <Button variant="ghost" size="icon" onClick={onClose} aria-label="Cerrar">
            <X className="h-4 w-4" />
          </Button>
        </div>
        <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Calidad premium: Utilizamos materiales de alta calidad para garantizar durabilidad y comodidad.</li>
          <li>Diseño ergonómico: Nuestras pecheras están diseñadas para adaptarse perfectamente a la anatomía de perros y gatos.</li>
          <li>Variedad de tallas: Ofrecemos una amplia gama de tallas para asegurar un ajuste perfecto para cada mascota.</li>
          <li>Personalización: Puedes personalizar las pecheras con el nombre de tu mascota o diseños únicos.</li>
          <li>Compromiso con la seguridad: Todas nuestras pecheras pasan rigurosas pruebas de seguridad.</li>
          <li>Servicio al cliente excepcional: Nuestro equipo está siempre dispuesto a ayudarte con cualquier duda o problema.</li>
          <li>Garantía de satisfacción: Si no estás completamente satisfecho, te devolvemos tu dinero.</li>
        </ul>
      </CardContent>
    </Card>
  )
}