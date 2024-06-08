import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon, LanguageIcon } from '@heroicons/react/20/solid'
import  i18next, { changeLanguage } from 'i18next'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function LanguageToggle({textColor}) {





  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center items-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300">
          <LanguageIcon className={'h-5 w-5 ' +textColor} />
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className={`absolute ${i18next.dir() =='rtl'?"left-0":"right-0"}  z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}>
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={()=>{changeLanguage('en')
                document.dir = 'ltr'

                }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 English
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={()=>{changeLanguage('ar')
                document.dir = 'rtl'
                
                }}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  عربي
                </div>
              )}
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
