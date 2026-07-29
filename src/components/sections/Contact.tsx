import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send, Check, AlertCircle } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import Reveal from '@/components/effects/Reveal';
import Magnetic from '@/components/effects/Magnetic';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xgogdrbv';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'ojasveegupta10@gmail.com',
    href: 'mailto:ojasveegupta10@gmail.com',
    target: undefined,
    color: '#3B82F6',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'in/ojasvee-gupta',
    href: 'https://www.linkedin.com/in/ojasvee-gupta/',
    target: '_blank',
    color: '#22D3EE',
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'Ojasvee10',
    href: 'https://github.com/Ojasvee10',
    target: '_blank',
    color: '#A855F7',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Lucknow, Uttar Pradesh, India',
    href: 'https://maps.google.com/?q=Lucknow,Uttar+Pradesh,India',
    target: '_blank',
    color: '#86EFAC',
  },
];

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const validate = () => {
    const e: typeof errors = {};
    if (!form.name.trim()) e.name = 'Please enter your name.';
    if (!form.email.trim()) e.email = 'Please enter your email.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Please enter a valid email.';
    if (!form.message.trim()) e.message = 'Please enter a message.';
    else if (form.message.trim().length < 10) e.message = 'Message should be at least 10 characters.';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus('loading');
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          _subject: `Portfolio contact from ${form.name}`,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 6000);
    }
  };

  const field =
    'w-full rounded-xl bg-white/[0.03] border border-white/10 px-4 py-3 text-sm text-white placeholder-white/30 outline-none transition-colors focus:border-white/30 focus:bg-white/[0.05]';

  return (
    <section id="contact" className="relative section-pad py-28 md:py-36">
      <div className="container-x">
        <SectionHeading
          eyebrow="Contact"
          title={
            <>
              Let's build <span className="aurora-text">something</span>.
            </>
          }
          description="Have a role, a project, or an idea worth shipping? I read every message."
        />

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Left: info */}
          <div className="lg:col-span-5">
            <Reveal>
              <div className="space-y-4">
                {contactInfo.map((c) => (
                  <Magnetic key={c.label} as="a" href={c.href} target={c.target} rel={c.target ? 'noreferrer' : undefined} strength={0.15}>
                    <div className="group flex items-center gap-4 rounded-2xl glass p-4 transition-colors hover:bg-white/[0.06]">
                      <span
                        className="flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ background: `${c.color}1a`, color: c.color }}
                      >
                        <c.icon size={18} />
                      </span>
                      <div>
                        <div className="text-xs uppercase tracking-wider text-white/40">{c.label}</div>
                        <div className="text-sm text-white/80">{c.value}</div>
                      </div>
                    </div>
                  </Magnetic>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            <Reveal delay={1}>
              <form
                onSubmit={onSubmit}
                noValidate
                className="relative overflow-hidden rounded-3xl glass-strong p-6 md:p-8"
              >
                <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-purple/20 blur-3xl" />
                <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-electric/20 blur-3xl" />

                <div className="relative grid gap-4 sm:grid-cols-2">
                  <div>
                    <input
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={`${field} ${errors.name ? 'border-red-400/60' : ''}`}
                    />
                    {errors.name && <p className="mt-1.5 text-xs text-red-400">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={`${field} ${errors.email ? 'border-red-400/60' : ''}`}
                    />
                    {errors.email && <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>}
                  </div>
                </div>
                <div className="relative mt-4">
                  <textarea
                    rows={5}
                    placeholder="Tell me about the role or project..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={`${field} resize-none ${errors.message ? 'border-red-400/60' : ''}`}
                  />
                  {errors.message && <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>}
                </div>

                <div className="relative mt-6 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
                  <p className="text-xs text-white/40">Typically replies within 24 hours.</p>
                  <Magnetic as="button" strength={0.2}>
                    <motion.button
                      type="submit"
                      disabled={status === 'loading' || status === 'success'}
                      whileTap={{ scale: 0.96 }}
                      className="relative inline-flex items-center gap-2 overflow-hidden rounded-full px-7 py-3 text-sm font-medium text-white disabled:opacity-80"
                    >
                      <span className="absolute inset-0 -z-10 aurora-bg" />
                      <AnimatePresence mode="wait">
                        {status === 'success' ? (
                          <motion.span
                            key="sent"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="inline-flex items-center gap-2"
                          >
                            <Check size={16} /> Sent
                          </motion.span>
                        ) : status === 'error' ? (
                          <motion.span
                            key="error"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="inline-flex items-center gap-2"
                          >
                            <AlertCircle size={16} /> Try again
                          </motion.span>
                        ) : status === 'loading' ? (
                          <motion.span
                            key="loading"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2"
                          >
                            <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                            Sending
                          </motion.span>
                        ) : (
                          <motion.span
                            key="idle"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="inline-flex items-center gap-2"
                          >
                            Send message <Send size={15} />
                          </motion.span>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </Magnetic>
                </div>

                {status === 'success' && (
                  <p className="relative mt-4 text-sm text-neon">
                    Thanks! Your message has been sent — I'll get back to you shortly.
                  </p>
                )}
                {status === 'error' && (
                  <p className="relative mt-4 text-sm text-red-400">
                    Something went wrong sending your message. Please email me directly at ojasveegupta10@gmail.com.
                  </p>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
