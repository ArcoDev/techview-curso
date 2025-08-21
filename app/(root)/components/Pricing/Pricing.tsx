import { pricingPlans } from "./Pricing.data"
import { Button } from "@/components/ui/button"
import { Check, Sparkles } from "lucide-react"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"

export function Pricing() {
return (
<section className="py-24 bg-gradient-to-b from-purple-700/10 to-purple-900" id="pricing">
    <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
            <h2 className="text-white text-3xl md:text-4xl font-bold mb-4">Chose your plane</h2>
            <p className="text-xl text-slate-200 max-w-2xl mx-auto">Start free, upgrade when you are ready to ace every
                interview</p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
            <Card key={index} 
                className={`relative group hover:shadow-xl transition-all duration-300 border-0 px-3 py-8
                ${plan.popular ? 
                    "rounded-md border bg-purple-900/70 border-purple-400/30 text-purple-200"
                : 
                    "rounded-md border bg-purple-500/20 border-purple-400/30 text-purple-200" }`}>
                {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-white text-purple-800 text-sm font-medium px-4 py-2 rounded-full flex items-center justify-center gap-2"><Sparkles className="w-4 h-4"/>Most popular</span>
                    </div>
                )}
                <CardHeader className="text-center pb-4">
                    <CardTitle className="text-2xl font-bold text-white">{ plan.name }</CardTitle>
                    <div className="mt-4">
                        <span className="text-5xl font-bold">$ { plan.price }</span>
                    </div>
                    <p className="text-slate-200 mt-2 text-sm">{ plan.description }</p>
                </CardHeader>
                <CardContent className="space-y-6">
                    <ul className="space-y-3">
                        { plan.feature.map((featureIndex) => (
                            <li key={featureIndex} className="flex items-center gap-3">
                                <Check className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                                <span className="text-sm">{featureIndex}</span>
                            </li>
                        ))}
                    </ul>
                    <Button size="lg">{ plan.buttonText }</Button>
                </CardContent>
            </Card>
            ))}
        </div>
    </div>
</section>
)
}