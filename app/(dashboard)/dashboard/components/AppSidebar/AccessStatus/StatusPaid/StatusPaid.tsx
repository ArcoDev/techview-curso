import { Button } from "@/components/ui/button";


export function StatusPaid() {
  return (
    <div className="flex items-start gap-4 p-3 rounded-xl bg-purple-500/20 text-white border border-white shadow-xl">
      <div className="w-full">
        <h3 className="font-semibold text-2xl mb-2 text-center">
          🚀 Full Access
        </h3>
        <Button className="w-full bg-purple-500/20 border-amber-200 text-amber-200 hover:bg-purple-900 cursor-pointer hover:transition-all hover:duration-500 py-1 my-2"> 
            Actived plan 
        </Button>
        <p className="text-sm text-center">You can practice unlimited interview with AI</p>
      </div>
    </div>
  )
}
