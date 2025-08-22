import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { ctaData } from "./Cta-data";

export function Cta() {
return (
<section className="py-24 bg-gradient-to-br from-purple-800/5 to-purple-600/5" id="cta">
    <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Ready To Ace</h2>
                <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
                    Join thousand of developers who ve transformed their intervire skills and landed theru dream jobs.
                    Start practicing today.
                </p>
            </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group mt-4" variant="secondary">
                <Sparkles className="group-hover:rotate-12 transition-transform" />
                Start Free Trial
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mt-16 border-t border-border/50">
            {ctaData.map((data, index) => (
                <div key={index} className="text-center mt-16">
                    <div className="text-3xl font-bold text-primary mb-2">
                        { data.title }
                    </div>
                    <div className="text-slate-200">{ data.description }</div>
                </div>
            ))}
        </div>
    </div>
</section>
)
}