import { useState, useRef } from 'react';
import SectionHeading from './SectionHeading';

const socials = [
  {
    name: 'GitHub',
    username: '@aditya-singh',
    link: 'https://github.com/', // User can update link later
    color: 'from-slate-800 to-slate-900',
    hoverRing: 'hover:ring-slate-500',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
        <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 2 0012 2z" />
      </svg>
    )
  },
  {
    name: 'LinkedIn',
    username: 'Aditya Singh',
    link: 'https://linkedin.com/in/', // User can update link later
    color: 'from-blue-600 to-blue-800',
    hoverRing: 'hover:ring-blue-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  },
  {
    name: 'Discord',
    username: '@aditya',
    link: '#', 
    color: 'from-[#5865F2] to-[#4752C4]',
    hoverRing: 'hover:ring-[#5865F2]',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
      </svg>
    )
  },
  {
    name: 'LeetCode',
    username: 'aditya-singh',
    link: 'https://leetcode.com/', 
    color: 'from-amber-500 to-orange-600',
    hoverRing: 'hover:ring-amber-400',
    icon: (
      <svg viewBox="0 0 24 24" className="w-8 h-8 text-white" fill="currentColor">
        <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.939 5.939 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114l5.706-6.105c.54-.577.51-1.482-.068-2.023A1.377 1.377 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382H10.617z"/>
      </svg>
    )
  }
];

export default function ConnectWithMe() {
  const formRef = useRef(null);
  const [modalState, setModalState] = useState({ isOpen: false, type: 'confirm' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalState({ isOpen: true, type: 'confirm' });
  };

  const confirmSend = async () => {
    setModalState({ isOpen: true, type: 'sending' });
    const form = formRef.current;
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setModalState({ isOpen: true, type: 'success' });
        form.reset();
      } else {
        setModalState({ isOpen: true, type: 'error' });
      }
    } catch (error) {
      setModalState({ isOpen: true, type: 'error' });
    }
  };

  const closeModal = () => {
    setModalState({ isOpen: false, type: 'confirm' });
  };

  return (
    <section className="px-4 md:px-8 mb-24 max-w-5xl mx-auto relative">
      <SectionHeading title="Connect With Me" />
      
      <div className="mt-12 text-center mb-12">
        <p className="text-black text-lg max-w-2xl mx-auto">
          I'm always open to discussing product design work or partnership opportunities.
          Feel free to reach out across any of these platforms!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${social.color} p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:scale-[1.02] ring-1 ring-white/10 ${social.hoverRing} hover:shadow-2xl`}
          >
            {/* Glass effect background */}
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm pointer-events-none" />
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-white/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500 pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center shadow-inner group-hover:bg-white/20 transition-colors duration-300">
                {social.icon}
              </div>
              
              <div>
                <h3 className="text-white font-bold text-xl">{social.name}</h3>
                <p className="text-white/70 font-medium text-sm mt-1">{social.username}</p>
              </div>

              <div className="mt-4 flex items-center justify-center gap-2 text-white/50 group-hover:text-white/90 transition-colors duration-300">
                <span className="text-xs font-semibold uppercase tracking-wider">Connect</span>
                <span className="material-symbols-outlined text-sm transition-transform duration-300 group-hover:translate-x-1">arrow_forward</span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Large Contact Form */}
      <div className="mt-8 relative overflow-hidden rounded-3xl bg-[#1a1a1a] p-8 md:p-12 shadow-2xl border border-white/10 group">
        <div className="absolute inset-0 bg-gradient-to-r from-violet-600/20 to-indigo-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        <div className="absolute top-0 right-0 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="text-center lg:text-left flex-1">
            <h3 className="text-3xl md:text-4xl font-bold text-white tracking-tight">Have an idea?</h3>
            <p className="text-white/60 mt-3 text-lg max-w-md mx-auto lg:mx-0">
              Let's build something awesome together. Fill out the form and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <form 
            ref={formRef}
            action="https://formsubmit.co/276c6df02aa8e06c4683ac1ebe548b81" 
            method="POST"
            onSubmit={handleSubmit}
            className="flex-1 w-full flex flex-col gap-4"
          >
            {/* FormSubmit Config */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            
            <div className="flex flex-col md:flex-row gap-4">
              <input 
                type="text" 
                name="name" 
                placeholder="Your Name" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="Your Email" 
                required
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
              />
            </div>
            <input 
              type="text" 
              name="_subject" 
              placeholder="Subject / Title" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all"
            />
            <textarea 
              name="message" 
              placeholder="Your Message" 
              required
              rows="4"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-violet-500 transition-all resize-none"
            ></textarea>
            <div className="flex justify-end mt-2">
              <button 
                type="submit"
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white text-black px-8 py-3 rounded-xl font-bold text-lg hover:scale-105 active:scale-95 transition-transform duration-300 shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
              >
                <span className="material-symbols-outlined text-xl">send</span>
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Custom Modal */}
      {modalState.isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={modalState.type === 'confirm' || modalState.type === 'error' || modalState.type === 'success' ? closeModal : undefined}
          />
          
          {/* Modal Content */}
          <div className="relative bg-[#1a1a1a] border border-white/10 rounded-3xl p-8 max-w-sm w-full shadow-2xl animate-in zoom-in-95 duration-200">
            {modalState.type === 'confirm' && (
              <div className="text-center">
                <div className="w-20 h-20 bg-yellow-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/email.png"
                  alt="Email"
                  className="w-12 h-12 object-contain"
                />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to send?</h3>
                <p className="text-white/60 mb-6">Are you sure you want to send this message?</p>
                <div className="flex gap-3">
                  <button 
                    onClick={closeModal}
                    className="flex-1 px-4 py-3 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors font-semibold"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmSend}
                    className="flex-1 px-4 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors font-bold"
                  >
                    Yes, Send it
                  </button>
                </div>
              </div>
            )}

            {modalState.type === 'sending' && (
              <div className="text-center py-6">
                <div className="w-12 h-12 border-4 border-violet-500/30 border-t-violet-500 rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white">Sending...</h3>
              </div>
            )}

            {modalState.type === 'success' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <img
                  src="/check.png"
                  alt="Check"
                  className="w-12 h-12 object-contain"
                />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">Message Sent <br/> <span className="text-green-400 text-4xl">Successfully! </span></h3>
                <p className="text-white/60 mb-6">I will get back to you ASAP!</p>
                <button 
                  onClick={closeModal}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors font-bold"
                >
                  Done
                </button>
              </div>
            )}

            {modalState.type === 'error' && (
              <div className="text-center">
                <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-3xl text-red-400">error</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Oops!</h3>
                <p className="text-white/60 mb-6">Something went wrong. Please try again later.</p>
                <button 
                  onClick={closeModal}
                  className="w-full px-4 py-3 rounded-xl bg-white text-black hover:bg-white/90 transition-colors font-bold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
