import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";


interface INavLink {
  display_text: string,
  link: Url,
};

const nav_links: INavLink[] = [
  {
    link: "/",
    display_text: "About me"
  },
  {
    link: "/projects",
    display_text: "Projects"
  },
  {
    link: "/experience",
    display_text: "Experience"
  },
  {
    link: "/ctf",
    display_text: "CTF Walkthroughs"
  }
];

const Navigation = () => {
  return (
    <nav className="w-full flex justify-center p-4">
      <NavigationMenu className="" orientation="vertical">
        <NavigationMenuList className="flex-col sm:flex-row">
          {nav_links.map((nav_link, key) => (
            <NavigationMenuItem key={key}>
              <Link href={nav_link.link} legacyBehavior passHref>
                <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-lg font-bold")}>
                  {nav_link.display_text}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </nav >)
}

export default Navigation;