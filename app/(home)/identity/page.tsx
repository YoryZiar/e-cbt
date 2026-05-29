// import { storeUserResult } from "@/app/actions/user/actions"

export default function IdentityContent() {
    return (
        <section className="bg-[#13072e] w-full mx-auto rounded-3xl py-6 px-2 text-left">
            <h1 className="text-center font-bold text-2xl text-white mb-6">Data Identitas</h1>

            <form action="" className="space-y-4">
                <label htmlFor="nama" className="block">
                    <span className="block font-medium text-sm mb-1 text-slate-300">Nama Lengkap</span>
                    <input type="text" id="nama" name="nama" className="py-3 w-full bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none px-4 focus:ring-2 focus:ring-secondary/50 placeholder-slate-400" placeholder="Masukkan nama Anda" />
                </label>
                
                <label htmlFor="email" className="block">
                    <span className="block font-medium text-sm mb-1 text-slate-300">Alamat Email</span>
                    <input type="email" id="email" name="email" className="py-3 w-full bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none px-4 focus:ring-2 focus:ring-secondary/50 placeholder-slate-400" placeholder="nama@email.com" />
                </label>
                
                <label htmlFor="noTelp" className="block">
                    <span className="block font-medium text-sm mb-1 text-slate-300">No. WhatsApp / Telp</span>
                    <input type="text" id="noTelp" name="noTelp" className="py-3 w-full bg-white/10 border border-white/20 text-white rounded-xl focus:outline-none px-4 focus:ring-2 focus:ring-secondary/50 placeholder-slate-400" placeholder="08123456789" />
                </label>
                
                <div className="mt-6 p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-xs text-center text-red-400 font-medium">
                        * Identitas dan data Anda dijamin kerahasiaannya.
                    </p>
                </div>
            </form>
        </section>
    )
}