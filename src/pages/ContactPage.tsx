export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-merlin-ivory min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <span className="text-merlin-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Contact Us</span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-black mb-6">Let's build the right hydraulic solution.</h1>
            <div className="space-y-4 text-zinc-700 font-medium leading-relaxed">
              <p>681/B, Old Glascon Shed Angol Industrial Estate, Udyambag, Belagavi, Karnataka 590008</p>
              <p>marketing@merlinhydraulics.com</p>
              <p>info@merlinhydraulics.com</p>
              <p className="text-merlin-blue font-bold">+91 951 394 1001 | +91 936 401 1001</p>
            </div>
          </div>

          <form className="bg-merlin-gray rounded-[24px] p-6 sm:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.08)] border border-merlin-sage/25 grid sm:grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm font-semibold text-black">Full Name<input required className="rounded-xl border border-merlin-sage/45 bg-merlin-ivory px-4 py-3 text-black outline-none transition-colors focus:border-merlin-blue focus:ring-2 focus:ring-merlin-blue/15" /></label>
            <label className="grid gap-2 text-sm font-semibold text-black">Company<input className="rounded-xl border border-merlin-sage/45 bg-merlin-ivory px-4 py-3 text-black outline-none transition-colors focus:border-merlin-blue focus:ring-2 focus:ring-merlin-blue/15" /></label>
            <label className="grid gap-2 text-sm font-semibold text-black">Email<input type="email" required className="rounded-xl border border-merlin-sage/45 bg-merlin-ivory px-4 py-3 text-black outline-none transition-colors focus:border-merlin-blue focus:ring-2 focus:ring-merlin-blue/15" /></label>
            <label className="grid gap-2 text-sm font-semibold text-black">Phone<input type="tel" required className="rounded-xl border border-merlin-sage/45 bg-merlin-ivory px-4 py-3 text-black outline-none transition-colors focus:border-merlin-blue focus:ring-2 focus:ring-merlin-blue/15" /></label>
            <label className="sm:col-span-2 grid gap-2 text-sm font-semibold text-black">Requirement<textarea rows={6} className="rounded-xl border border-merlin-sage/45 bg-merlin-ivory px-4 py-3 text-black outline-none transition-colors focus:border-merlin-blue focus:ring-2 focus:ring-merlin-blue/15 resize-y" /></label>
            <button type="submit" className="sm:col-span-2 bg-merlin-blue text-white rounded-full px-8 py-4 font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20 active:scale-[0.99]">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
