import React from 'react'
// import { useState } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  NavbarMenu,
  NavbarMenuToggle,
} from '@nextui-org/react'

export default function HomeNav({ activePage }) {
  const menuItems = [
    {
      name: 'custom',
      chineseName: '代客送花',
      subMenu: [
        { href: 'custom', chineseName: '快速選購' },
        { href: 'custom2', chineseName: '客製化' },
      ],
    },
    {
      name: 'online',
      chineseName: '線上商城',
      subMenu: [],
      // 下拉分頁，有的話增加
    },
    {
      name: 'course',
      chineseName: '課程預約',
      subMenu: [],
    },
    {
      name: 'plant',
      chineseName: '植物介紹',
      subMenu: [],
    },
    {
      name: 'about',
      chineseName: '關於我們',
      subMenu: [],
    },
  ]

  return (
    <Navbar isBordered className="bg-pink-200">
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="pr-3" justify="center">
        <NavbarBrand>
          <Link href="/">
            <p className="font-bold text-white">Bloomify</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {menuItems.map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            {item.subMenu.length > 0 ? (
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className={`bg-red-100 ${
                      activePage === item.name
                        ? ' border-b-3  border-red-700'
                        : ''
                    }`}
                  >
                    {item.chineseName}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="Sub menu">
                  {item.subMenu.map((subItem, subIndex) => (
                    <DropdownItem key={`${subItem}-${subIndex}`}>
                      {subItem ? (
                        <Link href={`/custom/${subItem.href}`}>
                          <p className="text-black">{subItem.chineseName}</p>
                        </Link>
                      ) : (
                        ''
                      )}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem>
                <Link color="foreground" href={`/custom/${item.name}`}>
                  {item.chineseName}
                </Link>
              </NavbarItem>
            )}
          </React.Fragment>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <React.Fragment key={`${item}-${index}`}>
            {item.subMenu.length > 0 ? (
              <Dropdown>
                <DropdownTrigger className="aaav">
                  <Button
                    className={`bg-red-100 ${
                      activePage === item.name
                        ? ' border-b-3 border-red-700'
                        : ''
                    }`}
                  >
                    {item.chineseName}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu aria-label="" className="text-center">
                  {item.subMenu.map((subItem, subIndex) => (
                    <DropdownItem key={`${subItem}-${subIndex}`}>
                      {subItem ? (
                        <Link href={`/custom/${subItem.href}`}>
                          <p className="text-black">{subItem.chineseName}</p>
                        </Link>
                      ) : (
                        ''
                      )}
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            ) : (
              <NavbarItem>
                <Link color="foreground" href={`/custom/${item.name}`}>
                  {item.chineseName}
                </Link>
              </NavbarItem>
            )}
          </React.Fragment>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}
