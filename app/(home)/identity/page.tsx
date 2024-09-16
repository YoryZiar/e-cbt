// import { storeUserResult } from "@/app/actions/user/actions"

export default function IdentityContent() {
    return (
        <section className="bg-white max-w-xs lg:max-w-md md:max-w-md mx-auto rounded-xl py-5">
            <h1 className="text-center font-normal text-3xl text-primary">IDENTITY</h1>

            <form action="" className="mt-5">
                {/* <input type="hidden" name="score" value={score} />
                <input type="hidden" name="level" value={level} /> */}
                <label htmlFor="nama" className="block mx-5">
                    <span className="block font-normal text-sm mb-1 text-start">Nama</span>
                    <input type="text" id="nama" name="nama" className="py-3 w-full bg-slate-500 rounded-xl bg-opacity-20 focus:outline-none px-3 focus:ring-1 focus:ring-primary" placeholder="example" />
                </label>
                <label htmlFor="email" className="block mx-5 my-3">
                    <span className="block font-normal text-sm mb-1 text-start">Email</span>
                    <input type="text" id="email" name="email" className="py-3 w-full bg-slate-500 rounded-xl bg-opacity-20 focus:outline-none px-3 focus:ring-1 focus:ring-primary" placeholder="example@gmail.com" />
                </label>
                <label htmlFor="noTelp" className="block mx-5">
                    <span className="block font-normal text-sm mb-1 text-start">No. Telp</span>
                    <input type="text" id="noTelp" name="noTelp" className="py-3 w-full bg-slate-500 rounded-xl bg-opacity-20 focus:outline-none px-3 focus:ring-1 focus:ring-primary" placeholder="087123098234" />
                </label>
                {/* <button type="submit" className="py-3 w-5/6 bg-red-700 block mx-auto mt-5 rounded-xl text-xl text-white">
                    Next
                </button> */}
                <h3 className="text-sm text-center text-red-700 mt-3">identitas anda dirahasiakan *</h3>
            </form>
        </section>
    )
}

// export default function Identity(score: string, level: string) {
//     return (
//         <IdentityContent score={score} level={level} />
//     )
// }