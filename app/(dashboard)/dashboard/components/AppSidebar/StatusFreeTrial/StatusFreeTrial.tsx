import { Button } from "@/components/ui/button";

export function StatusFreeTrial() {
  return (
    <div className="p-4 bg-blue-600/20 border border-white rounded-md">
        <h3 className="font-semibold text-md mb-2 text-center">
          🚀 Free Trial Available
        </h3>
        <Button className="w-full bg-purple-500/20 border border-amber-200 text-amber-200 hover:bg-purple-900 cursor-pointer hover:transition-all hover:duration-500 py-1 my-2"> 
            Actived plan 
        </Button>
        <p className="text-sm text-center">Create a free interview with AI</p>
    </div>
  )
}
