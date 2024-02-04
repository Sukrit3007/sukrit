import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import React from 'react'

const Contact = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-12 py-6 lg:px-96">
     <div className='flex flex-col gap-6 p-6 backdrop: min-w-full items-start justify-start '>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        send me message
      </h4>
      <Input
        placeholder='Your Name'
        className=''
      />
      
      <Textarea 
        placeholder="Type your message here." 
        id="message" 
        rows={8}
      />

      <Button>Send message</Button>
     </div>

     <div>
      
     </div>
    </main>
  )
}

export default Contact
