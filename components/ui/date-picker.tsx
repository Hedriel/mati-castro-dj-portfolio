"use client"

import * as React from "react"
import { format } from "date-fns"
import { es } from "date-fns/locale"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

interface DatePickerProps {
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
  className?: string
}

export function DatePicker({
  value,
  onChange,
  placeholder = "Seleccionar fecha",
  className,
}: DatePickerProps) {
  const date = value ? new Date(value + "T00:00:00") : undefined

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          type="button"
          className={cn(
            "w-full px-4 py-3 bg-black/80 border border-white/10 rounded-xl text-left flex items-center justify-between focus:outline-none focus:border-[#fe5900] focus:ring-1 focus:ring-[#fe5900] transition-colors",
            !date && "text-white/40",
            date && "text-white",
            className,
          )}
        >
          <span>{date ? format(date, "dd-MM-yyyy") : placeholder}</span>
          <CalendarIcon className="w-5 h-5 text-white/60" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0 bg-black border-white/10" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(selectedDate) => {
            if (selectedDate) {
              const year = selectedDate.getFullYear()
              const month = String(selectedDate.getMonth() + 1).padStart(2, "0")
              const day = String(selectedDate.getDate()).padStart(2, "0")
              onChange?.(`${year}-${month}-${day}`)
            }
          }}
          locale={es}
          defaultMonth={date}
          disabled={{ before: new Date() }}
          classNames={{
            today: "",
          }}
        />
      </PopoverContent>
    </Popover>
  )
}
