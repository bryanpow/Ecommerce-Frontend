import { Button } from "@material-tailwind/react";
import Aos from "aos";
import { useEffect } from "react";
export const LogIn = () => {
    useEffect(() => {
        Aos.init()
    }, [])
  return (
    <div>
      <div data-aos='flip-right' className=' sign-card absolute rounded pt-[50px] inset-[0] justify-center m-auto  w-[400px] h-[500px]' id='sign-up'>
        <img className="m-auto" src='https://static-00.iconduck.com/assets.00/login-icon-1024x854-wqjh0ggy.png' width='40px'></img>
        <h1 className="font-[450] text-center">Welcome!</h1>
        <p className="text-center pb-10">Sign in to your account</p>

        <form className="m-auto flex flex-col gap-3 w-[80%]">
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor='email'>Email</label>
            <input id='email' name='email'  className="pl-1 h-[30px] border-b"></input>
          </div>

          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor='password'>Password</label>
            <input id='password' name='password' type='password'  className=" pl-1 h-[30px] border-b"></input>
          </div>

          <div className="flex justify-between mt-2">
          <div className="flex gap-1">
          <input className='' type='checkbox'></input>
          <label className="text-[15px] text-[#4e4d4d] font-light" htmlFor="savePass">Save password?</label>
          </div>
          <p className="text-[15px] underline cursor-pointer text-[#4e4d4d]">Forgot password?</p>
          </div>
          <Button type='submit' className="w-[40%] bg-black m-auto mt-[20px]" variant="filled" placeholder={undefined}>Log in</Button>
        </form>
      </div>
    </div>
  )
}