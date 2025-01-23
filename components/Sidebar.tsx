import React, { FC } from "react";
import { motion } from "motion/react";
import Logo from "./Logo";
import { X } from "lucide-react";
import { headerData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import SocialMedia from "./SocialMedia";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => {
  const pathname = usePathname();
  const sidebarRef = useOutsideClick<HTMLDivElement>(onClose);

  return (
    /** Contenedor principal del Sidebar */
    <div
      className={`fixed inset-y-0 left-0 z-50 w-full bg-darkColor/50 shadow-xl hoverEffect cursor-auto ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* Contenido del Sidebar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        ref={sidebarRef}
        className="flex flex-col gap-6 h-full min-w-72 max-w-96 bg-darkColor p-10 text-white/70 border-r border-white"
      >
        {/* Header con Logo y Botón de Cerrar */}
        <div className="flex items-center justify-between">
          <button onClick={onClose}>
            <Logo className="text-white">Tulos</Logo>
          </button>
          <button className="hover:text-red-500" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Navegación del Sidebar */}
        <div className="flex flex-col gap-3.5 text-base font-semibold tracking-wide">
          {headerData?.map((item) => (            
            
              <Link
                onClick={onClose}
                key={item?.tittle}
                href={item?.href}
                className={`hover:text-white hoverEffect w-24 ${
                  pathname === item?.href && "text-white"
                }`}
              >
                {item?.tittle}                
              </Link>
            
          ))}
        </div>
        <SocialMedia/>
      </motion.div>
    </div>
  );
};

export default Sidebar;
