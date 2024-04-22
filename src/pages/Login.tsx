import type { Component } from "solid-js";
import bg from "../assets/Rectangle 1332.png";
const Login: Component = () => {
    return (
        <div class="w-full h-full">
            {/* <img src={bg} alt="" class="absolute w-full h-full" />
            <div class=" bg-black rounded-[15px] shadow items-center flex flex-col px-[521px]">
                <div>TRANSPORT EMS</div>
                <div>
                    <form action="">
                        <div>
                            <label for="username" class="block">
                                Username
                            </label>
                            <input type="text" placeholder="Username" class="border-2 border-gray-200 rounded-md w-full p-2" />
                        </div>
                        <div>
                            <label for="password" class="block"></label>
                            <input type="password" placeholder="Password" class="border-2 border-gray-200 rounded-md w-full p-2" />
                        </div>
                        <div class="w-full flex-col justify-center items-start gap-1.5 inline-flex">
                            <div class="text-black text-xl font-semibold font-['Nunito Sans']">USERNAME</div>
                            <div class="w-full bg-white rounded-[25px] border border-black"></div>
                        </div>
                        <button type="submit" class="bg-blue-500 text-white rounded-md p-2 w-full">
                            Login
                        </button>
                    </form>
                </div>
            </div> */}

            <div class="hero h-full">
                <img src={bg} alt="" class="w-full h-full" />
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="px-2">
                    <div class=" bg-white bg-opacity-80 rounded-[15px] shadow lg:px-[38px] md:px-[25px] px-[20px] lg:pt-[66px] md:pt-[50px] pt-[40px] lg:pb-[54px] md:pb-[40px] pb-[30px]">
                        <form action="" class="flex flex-col gap-[21px]">
                            <div class="text-black text-[40px] font-medium font-['Heebo'] text-center pb-[21px]">TRANSPORT EMS</div>
                            <select name="loginMethod" id="loginMethod" class="text-center border-2 border-black rounded-[25px] w-full p-3 bg-white text-black">
                                <option value="Telkomsel LDAP">Telkomsel LDAP</option>
                                <option value="telkomsel_ldap_oth...">telkomsel_ldap_oth...</option>
                                <option value="Local Login">Local Login</option>
                            </select>
                            <div>
                                <label class="text-black text-xl font-semibold font-['Nunito Sans']">USERNAME</label>
                                <input type="text" class="text-black border-2 border-black rounded-[25px] w-full p-3 bg-white" />
                            </div>
                            <div>
                                <label class="text-black text-xl font-semibold font-['Nunito Sans']">PASSWORD</label>
                                <input type="password" class="text-black border-2 border-black rounded-[25px] w-full p-3 bg-white" />
                            </div>
                            <div class="items-center text-center pt-[23px]">
                                {" "}
                                <button type="submit" class="items-center px-[68px] py-[12px] bg-neutral-500 bg-opacity-70 rounded-[25px] border border-black text-white">
                                    Sign In
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
