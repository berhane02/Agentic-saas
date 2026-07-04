"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SheetContent, SheetTrigger, Sheet } from "./ui/sheet";
import Sidebar from "./sidebar";
import { useIsMounted } from "@/hooks/use-is-mounted";

interface MobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

const MobileSidebar = ({
  apiLimitCount=0,
  isPro=false
}: MobileSidebarProps) => {
    const isMounted = useIsMounted();
    if (!isMounted) {
        return null;
    }
  return (
    <Sheet>
      <SheetTrigger>
        
          <Menu  />
        
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  );
}
export default MobileSidebar;
