import Component from "@/features/builder/components/palette/Component";
import { CheckCheck, TextCursorInputIcon } from "lucide-react";

const PaletteItems = [
  {
    icon: TextCursorInputIcon,
    title: "Text"
  },
  {
    icon: CheckCheck,
    title: "Checkbox"
  },
]

export default function Palette() {
  
  
  return (
    <div className="p-4 bg-white h-full flex flex-col w-60 border-r border-slate-200">
      <h3 className="font-bold text-slate-900 mb-3">
        Components
      </h3>
      <div className="flex flex-col gap-y-2 overflow-y-auto h-full">
        
        {
          PaletteItems.map(component => (
            <Component
              key={component.title}
              title={component.title}
              icon={component.icon}
            />
          ))
        }
      </div>
    </div>
  )
}
