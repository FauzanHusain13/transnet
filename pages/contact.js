const Contact = () => {
    return (
        <div class="w-full max-w-xl font-[Poppins] mx-auto mt-44">
            <h1 className="text-4xl text-center font-bold">Contact</h1>
            <div className="grid grid-cols-2 text-center gap-5 mt-20">
                <div className="bg-gray-100 rounded-md hover:bg-white hover:shadow-md p-10 cursor-pointer">
                    <h1 className="font-semibold text-lg">Email Us</h1>
                    <p className="text-base mt-4 leading-relaxed">
                        Simple drop us an email at info@globallink.net.id and you'll receive a reply within 24 hours
                    </p>
                </div>
                <div className="bg-gray-100 rounded-md hover:bg-white hover:shadow-md p-10 cursor-pointer">
                    <h1 className="font-semibold text-lg">Whatsapp</h1>
                    <p className="text-base mt-4 leading-relaxed">
                        Simple drop us an email at info@globallink.net.id and you'll receive a reply within 24 hours
                    </p>
                </div>
            </div>

            <form class="rounded px-8 pt-6 pb-8 mb-4 mt-20">
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Nama
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Kota
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
                </div>
                <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                    Alamat
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="username"
                    type="text"
                    placeholder="Enter your username"
                />
                </div>
                <div class="mb-6">
                <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                    Pesan
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
                </div>

                <div class="flex items-center justify-between">
                <button
                    class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                >
                    Kirim
                </button>
                </div>
            </form>
        </div>
    )
}

export default Contact;