import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import Logo from "./Logo";
import { 
  DashboardIcon,
  ReportsIcon,
  LinkbankIcon,
  SummaryIcon,
  ProductIcon,
  CategoryIcon,
  EmailIcon,
  StarIcon

} from "./Icon";

import Dashboardicon from '/public/assests/dashboard.svg'
import Image from 'next/image';



const CustomLink = ({href, title, className, icon}) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className}  ${router.asPath === href ? "text-[#443DF6]  -ml-2 w-[232px] h-[34px] rounded-[4px] bg-[#F6F6FF]":"text-[#667085] -ml-2"} `}>
      <div className="flex items-center px-2 gap-1.5">
        <span>
          {icon}
        </span>
        <li
          className='text-[14px]'
          // className={`${router.asPath === href ? "text-primary  px-5 py-1.5   rounded-[4px]   bg-secondary":"py-1.5"}`}
        >{title}</li>
      </div>
     
    </Link>
  )
}

const Sidebar = () => {
  return (
    <div className="w-[232px] h-full mt-8">
      <Logo />
      <hr className="w-[232px] mt-8" />
      <div className="mt-6">
        <h1 className="font-bold text-[14px] text-[#667085]">
          Sales Analytics
        </h1>
        <nav className="mt-2">
          <ul className="leading-[35px]">
            <div className="flex items-center gap-1.5">
              <CustomLink href="/dashboard" title="Dashboard" icon={<DashboardIcon
              className="active:fill-[#443DF6] active:bg-blue-600"
              />}/>
            </div>

            <div className="flex items-center gap-1.5" >
            <CustomLink href="/reports" title="Reports" icon={<ReportsIcon/>}/>
            </div>

            <div className="flex items-center gap-1.5">
            <CustomLink href="/linkbank" title="Link Bank Account" icon={<LinkbankIcon/>}/>
            </div>
          </ul>
        </nav>

        <h1 className="font-bold text-[14px] mt-6 text-[#667085]">
          Product Management Service
        </h1>
        <nav className="mt-2">
          <ul className="leading-[35px]">
            <div className="flex items-center gap-1.5">
              <CustomLink href="/summary" title="Summary" icon={<SummaryIcon/>}/>
            </div>
            <div className="flex items-center gap-1.5">
              <CustomLink href="/home" title="Product List" icon={<ProductIcon/>}/>
            </div>
            <div className="flex items-center gap-1.5">
              <CustomLink href="/category" title="Category List" icon={<CategoryIcon/>}/>
            </div>
          </ul>
        </nav>

        <h1 className="font-bold text-[14px] mt-6 text-[#667085]">
          Email Messaging
        </h1>
        <nav className='mt-2'>
          <ul className="leading-[35px]">
          <div className="flex items-center gap-1.5">
              <CustomLink href="/email" title="Email Message List" icon={<EmailIcon/>}/>
            </div>
          </ul>
        </nav>

        <div className='mt-[30rem] bg-[#FFFAEB] flex gap-2 items-center w-[232px] h-[34px] p-[8px]'>
          <span><StarIcon/></span>
          <h1 className='text-[14px] text-[#CC8406]'>See Version 2.10 Feature</h1>
          <p className='text-white text-[10px] rounded-[30px] bg-[#CC8406] py-[0.1rem] px-[0.3rem] w-[16px] h-[16px]'>2</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
