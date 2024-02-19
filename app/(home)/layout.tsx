'use client'
import Topbar from "@/components/topbar/topbar";
import { usePathname } from "next/navigation";

export default function homeLayout({ children }: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <html lang="ch">
        <body>
          <div className="flex flex-col h-screen">
            <Topbar currentOn={pathname}/>
            {children}
          </div>
        </body>
    </html>
  );
}