import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Login = ({ setShowLogin }) => {
  const [currState, setCurrState] = useState("Sign Up");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");          // رسائل الخطأ/النجاح

  /*—  حفظ أو التحقق —*/
  const handleSubmit = (e) => {
    e.preventDefault();

    // اجلب المستخدمين الحاليين أو مصفوفة فاضية
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    if (currState === "Sign Up") {
      // 1) لا يتكرر الإيميل
      const exists = users.find((u) => u.email === email);
      if (exists) return setMsg("البريد مسجَّل بالفعل!");

      // 2) أضف المستخدم ثم احفظ
      users.push({ name, email, password });
      localStorage.setItem("users", JSON.stringify(users));
      setMsg("تم إنشاء الحساب بنجاح ✔️");
      //— رجّع النموذج للوضع Login —//
      setCurrState("Login");
    } else {
      // LOGIN
      const user = users.find(
        (u) => u.email === email && u.password === password
      );
      if (!user) return setMsg("بيانات الدخول غير صحيحة!");

      setMsg("تم تسجيل الدخول ✅");
      // هنا ممكن تخزني هوية المستخدم فى localStorage أو context
      localStorage.setItem(
        "currentUser",
        JSON.stringify({ name: user.name, email: user.email })
      );
      // أغلق الـModal بعد ثانية مثلاً
      setTimeout(() => setShowLogin(false), 800);
    }

    // نظّف الحقول
    setPassword("");
    if (currState === "Sign Up") setName("");
  };

  return (
    <div className="absolute z-30 w-full h-full bg-[#00000090] grid">
      <form
        onSubmit={handleSubmit}
        className="place-self-center w-[90%] sm:w-80 text-[#808080] bg-white flex flex-col gap-6 py-6 px-7 rounded-xl text-sm"
      >
        {/* رأس الـModal */}
        <div className="flex justify-between items-center text-black">
          <h2 className="text-lg">{currState}</h2>
          <IoClose
            onClick={() => setShowLogin(false)}
            className="cursor-pointer text-2xl"
          />
        </div>

        {/* رسائل التنبيه */}
        {msg && (
          <p
            className={`text-center text-xs font-semibold ${
              msg.includes("✔️") || msg.includes("✅")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {msg}
          </p>
        )}

        {/* الحقول */}
        <div className="flex flex-col gap-5">
          {currState === "Sign Up" && (
            <input
              type="text"
              placeholder="الاسم"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="outline-0 border border-[#c9c9c9] p-2.5 rounded-sm"
            />
          )}

          <input
            type="email"
            placeholder="البريد الالكترونى"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="outline-0 border border-[#c9c9c9] p-2.5 rounded-sm"
          />

          <input
            type="password"
            placeholder="كلمة السر"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="outline-0 border border-[#c9c9c9] p-2.5 rounded-sm"
          />
        </div>

        <button
          type="submit"
          className="p-2.5 rounded-sm text-white bg-[#d07635] hover:bg-[#b96128] transition"
        >
          {currState === "Sign Up" ? "انشاء حساب" : "تسجيل الدخول"}
        </button>

        {/* رابط التبديل */}
        {currState === "Login" ? (
          <p className="text-end">
            إنشاء حساب جديد؟{" "}
            <span
              onClick={() => {
                setCurrState("Sign Up");
                setMsg("");
              }}
              className="cursor-pointer text-[#d07635]"
            >
              اضغط هنا
            </span>
          </p>
        ) : (
          <p className="text-end">
            لديك حساب بالفعل؟{" "}
            <span
              onClick={() => {
                setCurrState("Login");
                setMsg("");
              }}
              className="cursor-pointer text-[#d07635]"
            >
              اضغط هنا
            </span>
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
