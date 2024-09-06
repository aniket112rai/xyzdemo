import coalMine from "../assets/coalmine1.jpg"
import colamine1 from "../assets/coalmine2.jpg"
import { useState,useEffect } from "react";
import Select from "react-tailwindcss-select";
export default function Home(){
    const [basic,setBasic]=useState(null)
    const [adv,setAdv]=useState(null)
    const [color,setColor]=useState('border-slate-600')
    const arr=['border-green-700','border-purple-600','border-orange-900','border-slate-500','border-emerald-700']
    useEffect(()=>{
        const interval=setInterval(() => {
        const res=Math.floor(Math.random() * arr.length)
        console.log(arr[res])
        setColor(arr[res])
        }, 1000);
        return ()=> clearInterval(interval)
    },[])
    const options = [
        { value: "industry1", label: "industry1" },
        { value: "industry2", label: "industry2" },
        { value: "industry3", label: "industry3" }
    ];

    const basicHandleChange = (value) => {
        
        setBasic(value);
    };

    const advHandleChange = (value) => {
        
        setAdv(value);
    };
    return(
        <div className="bg-stone-900 w-screen h-full">
            <div className=" pt-20">
                <div className="flex justify-center w-full pb-8">
                    <h1 className="text-white text-7xl">topic</h1>
                </div>    
                <div className="flex">
                    <div className="basis-1/2">
                        <img className="object cover px-2" src={coalMine} alt="coal mine logo"/>
                    </div>
                    <div className="basis-1/2 text-orange-50 px-10 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iure quos laudantium mollitia recusandae commodi quis harum, neque, reiciendis, dolores dignissimos architecto dolorem aspernatur adipisci repellendus vel. Voluptatum, consequuntur iure?
                        Quaerat ducimus fuga inventore adipisci libero obcaecati error perferendis soluta nisi consequatur repudiandae natus repellendus corporis expedita, non porro! Non qui soluta fugit error ab modi nemo enim rerum voluptas!
                        Reolorem quas doloremque omnis esse ipsa similique ratione, quis quam. A libero facilis dolorum ex obcaecati. Quod, iste.
                        A quia, officia eaque ex id blanditiis, laudantium aut hic voluptate maxime ab recusandae exercitationem unde? Sit harum incidunt tempora dicta tenetur consequuntur.
                        Vitae ipsa cum debitis dolor, placeat qui, harum tenetur quis cupiditate esse libero nisi nulla porro eveniet. Quod facilis doloremque perspiciatis nemo delectus quam! Ex, explicabo nulla. Hic, commodi veritatis!                   
                    </div>
                </div>
            </div>

            <div className=" pt-20">
                <div className="flex">
                    <div className="basis-1/2 text-orange-50 px-10 ">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est iure quos laudantium mollitia recusandae commodi quis harum, neque, reiciendis, dolores dignissimos architecto dolorem aspernatur adipisci repellendus vel. Voluptatum, consequuntur iure?
                        Quaerat ducimus fuga inventore adipisci libero obcaecati error perferendis soluta nisi consequatur repudiandae natus repellendus corporis expedita, non porro! Non qui soluta fugit error ab modi nemo enim rerum voluptas!
                        Reolorem quas doloremque omnis esse ipsasequuntur iure? Quaerat ducimus fuga inventore adipisci libero obcaecati error perferendis soluta nisi consequatur repudiandae natus repellendus corporis expedita similique ratione, quis quam. A libero facilis dolorum ex obcaecati. Quod, iste.
                        A quia, officia eaque ex id blanditiis, laudantium aut hic voluptate maxime ab recusandae exercitationem unde? Sit harum incidunt tempora dicta tenetur consequuntur.
                        Vitae ipsa cum debitis dolor, placeat qui, harum tenetur quis cupiditate esse libero nisi nulla porro eveniet. Quod facilis doloremque perspiciatis nemo delectus quam! Ex, explicabo nulla. Hic, commodi veritatis!
                    </div>
                    <div className="basis-1/2">
                        <img className="object cover px-2" src={colamine1} alt="coal mine logo"/>
                    </div>
                    
                </div>
            </div>
            {/* ${color} */}
            <div className="flex flex-row h-screen justify-center items-center">
                <div className={`basis-1/2 w-1/2 flex justify-center items-center border-r ${color} `}>
                    
                    <div className="flex flex-col justify-center items-center border border-slate-400 px-28 py-10 rounded-3xl">
                        <div>
                            <h2 className="text-white pl-5 mb-20 text-3xl">gashjKDzxs</h2>
                            <p className="text-white mb-20 text-lg">hdgahvsbhxnkjasnzjkxasm</p>
                        </div>
                        <input type="text" placeholder="carbon emission" className="mb-4 pl-2 pr-6 py-2 border-2 border-purple-600 bg-black rounded-lg text-white" />
                        <Select
                            classNames={{
                                menuButton: ({ isDisabled }) =>
                                    `flex text-sm py-1 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`,
                                menu: 'absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm',
                                list: 'max-h-56 overflow-auto',
                                listItem: ({ isSelected }) =>
                                    `cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white ${
                                        isSelected ? 'bg-indigo-600 text-white' : ''
                                    }`,
                                searchContainer: 'mt-1 p-2 flex items-center',
                                searchInput: 'p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
                                input: 'p-2 text-gray-900 placeholder-gray-400',
                                placeholder: 'text-gray-400',
                                noOptionsMessage: 'text-gray-900 p-2 text-center',
                                option: ({ isSelected }) =>
                                    `cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                                        isSelected ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    }`,
                            }}
                            placeholder="Select Industry"
                            value={basic}
                            onChange={basicHandleChange}
                            options={options}
                        />
                        <button className="bg-purple-800 text-slate-300 px-10 mt-10 rounded-full py-2 border-2 border-purple-500 ">Submit</button>
                    </div>
                </div>
                <div className="basis-1/2 w-1/2 flex justify-center items-center text-center">
                    <div className="flex flex-col justify-center items-center border border-slate-400 px-28 py-10 rounded-3xl">
                        <div>
                            <h2 className="text-white pl-5 mb-20 text-3xl">gashjKDzxs</h2>
                            <p className="text-white mb-20 text-lg">hdgahvsbhxnkjasnzjkxasm</p>
                        </div>
                        <input type="text" placeholder="Carbon emission" className="mb-4 pl-2 pr-6 py-2 border-2 text-white border-blue-600 bg-black rounded-lg" />
                        <input type="text" placeholder="Query" className="mb-4 pl-2 pr-6 py-2 border-2 border-purple-600 bg-black rounded-lg text-white" />
                        <Select
                            classNames={{
                                menuButton: ({ isDisabled }) =>
                                    `flex text-sm py-1 text-gray-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${isDisabled ? 'opacity-50 cursor-not-allowed' : ''}`,
                                menu: 'absolute  z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm',
                                list: 'max-h-56 overflow-auto',
                                listItem: ({ isSelected }) =>
                                    `cursor-pointer select-none relative py-2 pl-3 pr-9 text-gray-900 hover:bg-indigo-600 hover:text-white ${
                                        isSelected ? 'bg-indigo-600 text-white' : ''
                                    }`,
                                searchContainer: 'mt-1 p-2 flex items-center',
                                searchInput: 'p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500',
                                input: 'p-2 text-gray-900 placeholder-gray-400',
                                placeholder: 'text-gray-400',
                                noOptionsMessage: 'text-gray-900 p-2 text-center',
                                option: ({ isSelected }) =>
                                    `cursor-pointer select-none relative py-2 pl-3 pr-9 ${
                                        isSelected ? 'bg-indigo-600 text-white' : 'text-gray-900'
                                    }`,
                            }}
                            placeholder="Select Industry"
                            value={adv}
                            onChange={advHandleChange}
                            options={options}
                        />
                        <button className="bg-blue-900 text-slate-300 px-10 mt-10 rounded-full py-2 border-2 border-blue-500 ">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}



// function Home() {
//     return (
//       <div>
//         <img src={companyLogo} alt="BigCo Inc. logo"/>
//       </div>
//     );
//   }