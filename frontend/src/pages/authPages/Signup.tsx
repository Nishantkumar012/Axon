import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeClosed, Loader2 } from "lucide-react";
import { axiosInstance } from "../../utils/axiosInstance";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const res = await axiosInstance.post("/auth/signup", {
        name,
        email,
        password,
      });

      alert("Signup successful! Please log in.");
      console.log(res)
      navigate("/login");
    } catch (err: any) {
      setError(err.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 relative overflow-hidden px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
      >
        {/* Logo + title */}
        <div className="flex items-center justify-center mb-6 space-x-2">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
            A
          </div>
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            Axion
          </span>
        </div>

        <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
        <p className="text-center text-gray-600 mb-8">
          Start your journey with Axion today 🚀
        </p>

        {/* Error message */}
        {error && (
          <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm">
            {error}
          </div>
        )}

        {/* Form */}
        <form className="space-y-5" onSubmit={handleSignup}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              value={name}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={email}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                value={password}
                placeholder={showPassword ? "Password" : "********"}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: !loading ? 1.05 : 1 }}
            disabled={loading}
            type="submit"
            className={`w-full flex items-center justify-center px-6 py-3 rounded-xl font-medium text-lg transition-all duration-300 ${
              loading
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-blue-600 to-blue-400 text-white hover:shadow-xl"
            }`}
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Signing up...
              </>
            ) : (
              <>
                Sign Up
                <ArrowRight className="ml-2 w-5 h-5" />
              </>
            )}
          </motion.button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="mx-3 text-sm text-gray-500">or</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Google button */}
        <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:shadow-md transition-all">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Sign up with Google
        </button>

        {/* Footer */}
        <p className="text-sm text-gray-600 text-center mt-6">
          Already have an account?{" "}
          <a href="/Login" className="text-blue-600 hover:underline">
            Log in
          </a>
        </p>
      </motion.div>
    </div>
  );
};

export default SignupPage;








// import React from "react";
// import { motion } from "framer-motion";
// import { ArrowRight, Eye, EyeClosed, Sparkles } from "lucide-react";
// import { useState } from "react";
// import { axiosInstance } from "../../utils/axiosInstance";
// import { useNavigate } from "react-router-dom";


// const SignupPage = () => {

//   const [name,setName] = useState("");
//   const [email,setEmail] = useState("");
//   const[password,setPassword]= useState("");
//   const[showPassword,setShowPassword]= useState(false);
//   const[error, setError] = useState("")
//   const[loading,setLoading] = useState(false)
 
//   const navigate = useNavigate();

// const handleSignup = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError("");
//     setLoading(true);

//     try {
//       await axiosInstance.post("/auth/signup", {
//         name,
//         email,
//         password,
//       });

//       alert("Signup successful! Please log in.");
//       navigate("/login");
//     } catch (err: any) {
//       setError(err.response?.data?.message || "Signup failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-blue-50 relative overflow-hidden px-6">
//       {/* Background decoration */}
//       <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

//       <motion.div
//         initial={{ opacity: 0, y: 30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="relative z-10 w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-200"
//       >
//         {/* Logo + title */}
//         <div className="flex items-center justify-center mb-6 space-x-2">
//           <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex items-center justify-center text-white font-bold shadow-lg">
//             A
//           </div>
//           <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
//             Axion
//           </span>
//         </div>

//         <h2 className="text-3xl font-bold text-center mb-2">Create your account</h2>
//         <p className="text-center text-gray-600 mb-8">
//           Start your journey with Axion today 🚀
//         </p>

//         {/* Form */}
//         <form className="space-y-5" onSubmit={handleSignup}>
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Full Name
//             </label>
//             <input
//               type="text"
//               value={name}
//               placeholder="John Doe"
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e)=> setName(e.target.value)}
//             />
//           </div>

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Email
//             </label>
//             <input
//               type="email"
//               value={email}
//               placeholder="you@example.com"
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e)=>setEmail(e.target.value)}
//             />
//           </div>

//           <div >
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Password
//             </label>

//             <div className="relative">
//             <input
//               type={showPassword? 'text':'password'}
//               value={password}
//               // placeholder="********" 
//               placeholder={showPassword? "Password":"********" }
//               className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
//               onChange={(e)=> setPassword(e.target.value)}
//               />

//               <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//                 onClick={()=>{
//                   setShowPassword(!showPassword)
//                 }}
//                 >
//                 {/* <Eye/> */}
//                 {showPassword?<Eye/>:<EyeClosed/>}
//               </span>
//             </div>
//         </div>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             className="w-full flex items-center justify-center bg-gradient-to-r from-blue-600 to-blue-400 text-white px-6 py-3 rounded-xl font-medium text-lg hover:shadow-xl transition-all duration-300"
//           >
//             Sign Up
//             <ArrowRight className="ml-2 w-5 h-5" />
//           </motion.button>
//         </form>

//         {/* Divider */}
//         <div className="my-6 flex items-center">
//           <div className="flex-grow border-t border-gray-300"></div>
//           <span className="mx-3 text-sm text-gray-500">or</span>
//           <div className="flex-grow border-t border-gray-300"></div>
//         </div>

//         {/* Google button */}
//         <button className="w-full flex items-center justify-center px-6 py-3 border border-gray-300 rounded-xl hover:shadow-md transition-all">
//           <img
//             src="https://www.svgrepo.com/show/355037/google.svg"
//             alt="Google"
//             className="w-5 h-5 mr-2"
//           />
//           Sign up with Google
//         </button>

//         {/* Footer */}
//         <p className="text-sm text-gray-600 text-center mt-6">
//           Already have an account?{" "}
//           <a href="/signin" className="text-blue-600 hover:underline">
//             Sign in
//           </a>
//         </p>
//       </motion.div>
//     </div>
//   );
// };

// export default SignupPage;
