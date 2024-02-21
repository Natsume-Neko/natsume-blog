'use client'
import Footer from "@/components/footer/footer";
import Topbar from "@/components/topbar/topbar";
import { usePathname } from "next/navigation";

export default function homeLayout({ children }: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <html lang="ch">
        <body>
          <div className="flex flex-col h-screen overflow-auto">
            <Topbar currentOn={pathname} />
            <div className="flex-grow mt-10 mb-16">
              <div className="flex justify-center">
                <div className="bg-main-body shadow-pink-300 shadow-sm rounded-sm w-[1100px] mt-10">
                  <div className="p-5 text-lg">
                    {children}
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </body>
    </html>
  );
}