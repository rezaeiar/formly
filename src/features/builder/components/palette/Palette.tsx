import Component from "@/features/builder/components/palette/Component";
import { FieldRegistery } from "@/features/builder/registery/FieldRegistery";


export default function Palette() {
  const fields = Object.values(FieldRegistery)
console.log(fields);


  return (
    <div className="p-4 bg-white h-full flex flex-col w-60 border-r border-slate-200">
      <h3 className="font-bold text-slate-900 mb-3">
        Components
      </h3>
      <div className="flex flex-col gap-y-2 overflow-y-auto h-full">

        {
          fields.map(component => (
            <Component
              key={component.type}
              title={component.title}
              icon={component.icon}
            />
          ))
        }
      </div>
    </div>
  )
}
