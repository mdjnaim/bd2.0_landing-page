import PillarCard from "./pillarcard"
import { pillars } from "../data/pillardata"


export default function PillarSection() {
  return (
    <div  className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
           Pillars of "Bangladesh 2.0" 
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {pillars.map((pillar, index) => (
                <PillarCard key={index} title={pillar.title} desc={pillar.desc} />
            ))} 
        </div>
    </div>
  )
}
