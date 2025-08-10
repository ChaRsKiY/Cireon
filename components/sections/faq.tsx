"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const items = [
  { q: "How long to launch?", a: "First results in 2–4 weeks depending on scope." },
  { q: "Do you work under NDA?", a: "Yes. We follow strict security and compliance." },
  { q: "How do you estimate?", a: "We estimate by phases and provide a roadmap." },
]

export default function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {items.map((it, i) => (
        <AccordionItem key={i} value={"item-" + i}>
          <AccordionTrigger>{it.q}</AccordionTrigger>
          <AccordionContent>{it.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
