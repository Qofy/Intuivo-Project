

export default function Contact(){
  return(
    <div id="contact">
      <div className="flex flex-col items-center">
        <h1 className="h1-style">
          Contact
        </h1>
        <h3>
          Send us a mesage we will love to talk with you!
        </h3>
      </div>

      <form action="" className="flex flex-col max-w-lg mx-auto space-y-4 p-6">
  <div className="flex flex-col">
    <label htmlFor="name" className="mb-2 font-medium">
      Name:
    </label>
    <input 
      type="text" 
      required 
      placeholder="Your Full Name" 
      name="name"
      className="bg-[#242223] border border-[#3a3738] rounded px-4 py-3 focus:outline-none focus:border-[#a0bd35] transition-colors"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="email" className="mb-2 font-medium">
      Email:
    </label>
    <input 
      type="email" 
      required
      placeholder="Your Email"
      name="email"
      className="bg-[#242223] border border-[#3a3738] rounded px-4 py-3 focus:outline-none focus:border-[#a0bd35] transition-colors"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="subject" className="mb-2 font-medium">
      Subject:
    </label>
    <input 
      type="text" 
      placeholder="Message Subject"
      name="subject"
      className="bg-[#242223] border border-[#3a3738] rounded px-4 py-3 focus:outline-none focus:border-[#a0bd35] transition-colors"
    />
  </div>

  <div className="flex flex-col">
    <label htmlFor="message" className="mb-2 font-medium">
      Message:
    </label>
    <textarea 
      name="message" 
      id="message" 
      placeholder="Your Message"
      rows="5"
      className="bg-[#242223] border border-[#3a3738] rounded px-4 py-3 resize-none focus:outline-none focus:border-[#a0bd35] transition-colors"
    ></textarea>
  </div>

  <button className="bg-[#a0bd35] text-[#ffff] px-6 py-3 rounded hover:bg-[#8fa530] transition-colors font-medium mt-2">
    Send Message
  </button>
</form>
    </div>
  )
}