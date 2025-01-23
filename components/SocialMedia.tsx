import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import Link from 'next/link';
import { Facebook, Github, Instagram, Linkedin, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Props{
    className?: string;
    iconClassName?: string;
    tooltipClassName: string;
}

const socialLink = [
    {
        tittle: "Youtube",
        href: "",
        icon: <Youtube className="w-5 h-5"/>
    },
    {
        tittle: "Github",
        href: "",
        icon: <Github className="w-5 h-5"/>
    },
    {
        tittle: "Linkedin",
        href: "",
        icon: <Linkedin className="w-5 h-5"/>
    },
    {
        tittle: "Facebook",
        href: "",
        icon: <Facebook className="w-5 h-5"/>
    },
    {
        tittle: "Instagram",
        href: "",
        icon: <Instagram className="w-5 h-5"/>
    },

]

const SocialMedia = ({ className, iconClassName, tooltipClassName}:Props) => {
  return (
    <TooltipProvider>
        <div className={cn('flex items-center gap-3.5', className)}>
            {socialLink?.map((item) => (
                <Tooltip key={item?.tittle}>
                <TooltipTrigger asChild>
                    <Link
                     href={item?.href}
                     target="_blank"
                     rel="noopener noreferrer"
                     className={cn("p-2 border rounded-full hover:text-white hover:border-white hoverEffect", iconClassName)}>
                      {item?.icon}
                    </Link>
                </TooltipTrigger>
                <TooltipContent className={cn("bg-white text-darkColor font-semibold", tooltipClassName)}>{item?.tittle}</TooltipContent>
            </Tooltip>
            ) )}         
        </div>
    </TooltipProvider>
  )
}

export default SocialMedia