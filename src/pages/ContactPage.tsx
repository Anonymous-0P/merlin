export default function ContactPage() {
  return (
    <section className="pt-28 pb-20 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-10 items-start">
          <div>
            <span className="text-merlin-blue font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Contact Us</span>
            <h1 className="text-4xl sm:text-6xl font-bold tracking-tighter text-black mb-6">Let's build the right hydraulic solution.</h1>
            <div className="space-y-4 text-gray-600 font-medium">
              <p>681/B, Old Glascon Shed Angol Industrial Estate, Udyambag, Belagavi, Karnataka 590008</p>
              <p>marketing@merlinhydraulics.com</p>
              <p>info@merlinhydraulics.com</p>
              <p className="text-merlin-blue font-bold">+91 951 394 1001 | +91 936 401 1001</p>
            </div>
          </div>

          <form className="bg-[#f5f5f7] rounded-[28px] p-6 sm:p-8 shadow-sm border border-gray-100 grid sm:grid-cols-2 gap-4">
            <label className="grid gap-2 text-sm font-semibold text-gray-600">Full Name<input required className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-merlin-blue" /></label>
            <label className="grid gap-2 text-sm font-semibold text-gray-600">Company<input className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-merlin-blue" /></label>
            <label className="grid gap-2 text-sm font-semibold text-gray-600">Email<input type="email" required className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-merlin-blue" /></label>
            <label className="grid gap-2 text-sm font-semibold text-gray-600">Phone<input type="tel" required className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-merlin-blue" /></label>
            <label className="sm:col-span-2 grid gap-2 text-sm font-semibold text-gray-600">Requirement<textarea rows={6} className="rounded-xl border border-gray-200 px-4 py-3 outline-none focus:border-merlin-blue resize-y" /></label>
            <button type="submit" className="sm:col-span-2 bg-merlin-blue text-white rounded-full px-8 py-4 font-bold hover:bg-blue-700 transition-colors">Send Enquiry</button>
          </form>
        </div>
      </div>
    </section>
  );
}
