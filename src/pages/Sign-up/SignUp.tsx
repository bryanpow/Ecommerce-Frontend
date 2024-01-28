import { Button } from "@material-tailwind/react";

function SignUp() {
  return (
    <div>
      <div className=' sign-card absolute rounded pt-[50px] inset-[0] justify-center m-auto  w-[400px] h-[500px]' id='sign-up'>
        <img className="m-auto" src='https://static.thenounproject.com/png/70749-200.png' width='40px'></img>
        <h1 className="font-[450] text-center">Sign-Up!</h1>
        <p className="text-center pb-10">Create your account</p>
        <form className="m-auto flex flex-col gap-3 w-[80%] ">
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor='name'>Name</label>
            <input id='name' name='name' className=" h-[30px] pl-1 border-b" type='text' ></input>
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor='email'>Email</label>
            <input id='email' name='email'  className=" h-[30px] pl-1 border-b"></input>
          </div>
          <div className="flex justify-center flex-col">
            <label className="font-[450] text-gray-400" htmlFor='password'>Password</label>
            <input id='password' name='password' type='password'   className=" h-[30px] pl-1 border-b"></input>
          </div>
          <Button type='submit' className="w-[50%] bg-black m-auto mt-[20px]" variant="filled" placeholder={undefined}>Create Account</Button>
        </form>
      </div>
    </div>
  )
}

export default SignUp