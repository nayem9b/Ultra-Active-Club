import React from 'react';

const Userprofile = () => {
    return (
        <div>
            
<button data-popover-target="popover-user-profile" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">User profile</button>
<div data-popover="" id="popover-user-profile" role="tooltip" className="inline-block absolute invisible z-10 w-64 text-sm font-light text-gray-500 bg-white rounded-lg border border-gray-200 shadow-sm opacity-0 transition-opacity duration-300 dark:text-gray-400 dark:bg-gray-800 dark:border-gray-600" style="position: absolute; inset: 0px auto auto 0px; margin: 0px; transform: translate3d(0px, 1014.4px, 0px);" data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
    <div className="p-3">
        <div className="flex justify-between items-center mb-2">
            <a href="https://www.google.com/">
                <img className="w-10 h-10 rounded-full" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos"/>
            </a>
            <div>
                <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-xs px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Follow</button>
            </div>
        </div>
        <p className="text-base font-semibold leading-none text-gray-900 dark:text-white">
            <a href="https://www.google.com/">Jese Leos</a>
        </p>
        <p className="mb-3 text-sm font-normal">
            <a href="https://www.google.com/" className="hover:underline">@jeseleos</a>
        </p>
        <p className="mb-4 text-sm font-light">Open-source contributor. Building <a href="#" className="text-blue-600 dark:text-blue-500 hover:underline">flowbite.com</a>.</p>
        <ul className="flex text-sm font-light">
            <li className="mr-2">
                <a href="https://www.google.com/" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">799</span>
                    <spa>Following
                </spa></a>
            </li>
            <li>
                <a href="https://www.google.com/" className="hover:underline">
                    <span className="font-semibold text-gray-900 dark:text-white">3,758</span>
                    <span>Followers</span>
                </a>
            </li>
        </ul>
    </div>
    <div data-popper-arrow="" style="position: absolute; left: 0px; transform: translate3d(0px, 0px, 0px);"></div>
</div>

        </div>
    );
};

export default Userprofile;