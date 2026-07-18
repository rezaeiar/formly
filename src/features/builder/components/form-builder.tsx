import Canvas from '@/features/builder/components/canvas/Canvas'
import Palette from '@/features/builder/components/palette/Palette'
import Properties from '@/features/builder/components/properties/Properties'
import Toolbar from '@/features/builder/components/toolbar/Toolbar'

export default function FormBuilder() {
  return (
    <div className="h-screen flex flex-col overflow-hidden">
      <Toolbar />
      <div className="flex flex-1 min-h-0 overflow-hidden">
        <Palette />
        <Canvas />
        <Properties />
      </div>
    </div>
  )
}
