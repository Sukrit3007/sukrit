
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const ContactMeForm = () => {
  
  return (
    <div className='flex flex-col gap-6 p-6 backdrop: min-w-full items-start justify-start '>
      <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
        send me message 📨
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
  )
}

export default ContactMeForm
