export default function Login() {
  return (
    <main className="min-h-screen flex items-center justify-center">

      <div className="bg-white p-8 rounded-xl shadow w-96">
        <h2 className="text-2xl text-black font-bold mb-4">Login</h2>

        <input
          className="w-full text-black border p-3 rounded mb-4"
          placeholder="Email"
        />

        <input
          className="w-full text-black border p-3 rounded mb-4"
          placeholder="Password"
          type="password"
        />

        <button className="bg-blue-600 text-white w-full py-3 rounded">
          Sign in
        </button>
      </div>

    </main>
  );
}
