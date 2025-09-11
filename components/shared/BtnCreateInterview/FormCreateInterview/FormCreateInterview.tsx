"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import z from "zod"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { formSchema } from "./FormCreateInter.form"
import { Mic } from "lucide-react"
import { difficulties, roles } from "./FormCreateInter.data"

export function FormCreateInterview() {
    const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      rol: "",
      level: ""
    },
  })
 
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values)
  }
  return (
     <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 text-black">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name of the interview</FormLabel>
              <FormControl>
                <Input placeholder="Interview name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="rol"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select your role</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {roles.map((role) => (
                    <SelectItem 
                        key = { role.label } 
                        value ={ role.value }>
                        <div className="flex items-center gap-2">
                            <i>{ role.icon }</i>
                            <p>{ role.label }</p>
                        </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="level"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Select the difficulty</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Difficulty" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {difficulties.map((diff) => (
                    <SelectItem 
                        key = { diff.label } 
                        value ={ diff.value }>
                        <div className="flex items-center gap-2">
                            <p>{ diff.label }</p>
                        </div>
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full bg-gradient-to-r from-purple-600 to-blue-600 font-bold py-3 px-2 rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer">
            Start interview
            <Mic />
        </Button>
      </form>
    </Form>
  )
}
