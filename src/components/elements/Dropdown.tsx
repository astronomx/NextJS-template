import { Menu } from '@headlessui/react';
import { Bars3BottomRightIcon } from "@heroicons/react/24/outline";

export default function Dropdown() {
  return(
    <Menu>
      <Menu.Button><Bars3BottomRightIcon className="h-7 w-7 text-gray-500" /></Menu.Button>
      <Menu.Items className="flex flex-col absolute text-center text-lg justify-center mt-16 mr-[285px] w-full bg-white">
        <Menu.Item>
          {({ active }) => (
            <span className="py-3"><a className={`${active && 'bg-blue-500'}`} href="/account">
              Home
            </a></span>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <span className="py-3"><a className={`${active && 'bg-blue-500'}`} href="/account">
            Logboek
          </a></span>
          )}
        </Menu.Item>
        <Menu.Item>
          {({ active }) => (
            <span className="py-3"><a className={`${active && 'bg-blue-500'}`} href="/account">
            Over ons
          </a></span>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  )
}

