import { Button } from "@/components/ui/button"
import { StatusFreeTrial } from "../StatusFreeTrial"
import { StatusPaid } from "./StatusPaid"

export function AccessStatus() {
    const hasPaid = false
    const statusFree = false
    if (hasPaid) {
        return <StatusPaid />
    }
    if(statusFree) {
        return <StatusFreeTrial />
    }
    return (
    <div className=" p-2 border-white bg-purple-800/20 border rounded-md">
        <h3 className="text-center semi-bold text-xl mb-1">🚫 Plan no activated</h3>
        <Button className="w-full bg-red-700 hover:bg-red-900 cursor-pointer hover:transition-all hover:duration-500 py-1 my-2"> 
            Limited access
        </Button>
        <p className="text-xs text-center">You access uses your free trial</p>
    </div>
  )
}
