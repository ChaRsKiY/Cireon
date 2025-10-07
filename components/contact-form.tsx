"use client"

import { useState, useTransition } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Check, Loader2, AlertCircle } from "lucide-react"
import { contactFormSchema } from "@/lib/validations"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function ContactForm() {
  const [done, setDone] = useState(false)
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState<string | null>(null)
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({})

  const handleSubmit = async (formData: FormData) => {
    setError(null)
    setValidationErrors({})

    const data = {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
      company: formData.get('company') as string || undefined,
      message: formData.get('message') as string,
    }

    const validationResult = contactFormSchema.safeParse(data)
    if (!validationResult.success) {
      const errors: Record<string, string> = {}
      validationResult.error.errors.forEach((err) => {
        if (err.path[0]) {
          errors[err.path[0] as string] = err.message
        }
      })
      setValidationErrors(errors)
      return
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (!response.ok) {
        if (response.status === 429) {
          setError('Too many requests. Please wait a moment before trying again.')
        } else if (response.status === 400) {
          setError('Please check your input and try again.')
        } else {
          setError(result.error || 'Something went wrong. Please try again.')
        }
        return
      }

      setDone(true)
      const form = document.querySelector('form') as HTMLFormElement
      if (form) form.reset()
    } catch (err) {
      setError('Network error. Please check your connection and try again.')
    }
  }

  return (
    <div className="space-y-4 flex-grow">
      {error && (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form
        action={(fd) =>
          startTransition(async () => {
            await handleSubmit(fd)
          })
        }
        className="gap-3 h-full flex flex-col"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <Input 
              name="name" 
              placeholder="Your name" 
              required 
              className={validationErrors.name ? 'border-red-500' : ''}
            />
            {validationErrors.name && (
              <p className="text-xs text-red-500 mt-1">{validationErrors.name}</p>
            )}
          </div>
          <div>
            <Input 
              type="email" 
              name="email" 
              placeholder="Email" 
              required 
              className={validationErrors.email ? 'border-red-500' : ''}
            />
            {validationErrors.email && (
              <p className="text-xs text-red-500 mt-1">{validationErrors.email}</p>
            )}
          </div>
        </div>
        
        <div>
          <Input 
            name="company" 
            placeholder="Company (optional)" 
            className={validationErrors.company ? 'border-red-500' : ''}
          />
          {validationErrors.company && (
            <p className="text-xs text-red-500 mt-1">{validationErrors.company}</p>
          )}
        </div>
        
        <div className="flex-grow flex flex-col">
          <Textarea 
            name="message" 
            placeholder="Briefly describe your task..." 
            required 
            rows={6}
            className={validationErrors.message ? 'border-red-500 flex-grow' : 'flex-grow'}
          />
          {validationErrors.message && (
            <p className="text-xs text-red-500 mt-1">{validationErrors.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isPending || done} 
          className="bg-primary hover:bg-primary/90 text-primary-foreground"
        >
          {isPending ? (
            <>
              <Loader2 className="size-4 animate-spin mr-2" />
              Sending...
            </>
          ) : done ? (
            <>
              <Check className="size-4 mr-2" />
              Sent
            </>
          ) : (
            'Send'
          )}
        </Button>
        
        <p className="text-xs text-muted-foreground">
          By sending, you agree to the processing of personal data.
        </p>
      </form>
    </div>
  )
}
