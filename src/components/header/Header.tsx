import { Button } from "../Button";
import Image from "next/image";
import Refresh from '@pub/refresh.svg';
import Steam from '@pub/steam.svg';

import styles from './Header.module.css'



export interface HeaderProps {
  position?: string;
}

const active = 'border-b-2';



export const Header = (props: HeaderProps) => {
  return (
    <header className=" overflow-auto p-2 w-full bg-header text-csgo rounded-t-md flex justify-start items-center">
      <Button label="csgowd.net" color="bg-neutral" offLabel="wd" />
      <div className="mx-4 p-2 cursor-pointer">
        <span className="px-4 font-bold text-fontmain">bomj</span>
        <span className="text-neutral font-bold">35$</span>
      </div>
      <div className={`mx-4 p-2 cursor-pointer group ${active}`}>
        <span className="px-4 font-bold text-slate-200">Normal</span>
        <span className={`text-slate-400 font-bold group-hover:text-slate-500`}>35$</span>
      </div>
      <div>
        |
      </div>
      <div className="flex items-center justify-center">
        <p>
          <Refresh id='refresh' className={styles.ee} width={20} height={20}/>          
        </p>
        <p className="text-slate-400 px-4">
          Coinflip
        </p>
        <p>
          &gt;
        </p>
        <Button label="create new" color="bg-buttonActive" icon={<Refresh className="cursor-pointer" width={20} height={20}/>}/>
      </div>
      <div className="self-end my-2 mx-4">
        <Button label="sign in steam" color="bg-neutral" icon={<Steam className="cursor-pointer" width={20} height={20}/>}/>
      </div>
    </header>
  );
};
