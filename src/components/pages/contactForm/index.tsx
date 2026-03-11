"use client";

import { useState } from "react";
import * as yup from "yup";
import { Send } from "lucide-react";
import { sendContactMessage } from "@/lib/api/sendContactMessage";

const schema = yup.object({
  email: yup
    .string()
    .email("Enter valid email")
    .required("Email required"),

  message: yup
    .string()
    .min(5, "Minimum 5 characters")
    .max(300, "Maximum 300 characters")
    .required(),
});

export default function ContactForm() {

  const [email,setEmail] = useState("");
  const [message,setMessage] = useState("");
  const [errors,setErrors] = useState<any>({});
  const [loading,setLoading] = useState(false);
  const [success,setSuccess] = useState(false);

  const handleSubmit = async (e:any) => {

    e.preventDefault();

    try {

      await schema.validate(
        {email,message},
        {abortEarly:false}
      );

      setErrors({});
      setLoading(true);

      await sendContactMessage(email, message);

      setSuccess(true);
      setEmail("");
      setMessage("");

    } catch(err:any) {

      const newErrors:any = {};

      err.inner?.forEach((e:any)=>{
        newErrors[e.path] = e.message;
      });

      setErrors(newErrors);
    }

    setLoading(false);
  };

  return (

    <div className="max-w-xl mx-auto mt-20 p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10 shadow-lg">

      <h2 className="text-2xl font-bold text-teal-300 mb-6">
        Send me a message
      </h2>

      {success && (
        <div className="mb-4 text-green-400 animate-pulse">
          Message sent successfully 🚀
        </div>
      )}

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">

        <div>
          <input
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Your Email"
            className="w-full p-3 rounded-lg bg-black/40 border border-white/20 text-white focus:border-teal-400 outline-none"
          />

          {errors.email && (
            <p className="text-red-400 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <textarea
            value={message}
            onChange={(e)=>setMessage(e.target.value)}
            placeholder="Your Message..."
            className="w-full p-3 h-32 resize-none rounded-lg bg-black/40 border border-white/20 text-white focus:border-teal-400 outline-none"
          />

          <div className="flex justify-between text-xs mt-1 text-gray-400">
            <span>{errors.message}</span>
            <span>{message.length}/300</span>
          </div>
        </div>

        <button
          disabled={loading}
          className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 rounded-lg transition-all"
        >
          {loading ? "Sending..." : "Send Message"}
          <Send size={18}/>
        </button>

      </form>

    </div>
  );
}