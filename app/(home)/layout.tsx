import Topbar from "@/components/topbar/topbar";

export default function homeLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ch">
        <body>
          <div className="flex flex-col h-screen overflow-auto bg-[#0d1117] text-white">
            <Topbar />
            <div className="flex-grow mt-10">
              <div className="flex justify-center">
                <div className="w-[1100px] mt-10">
                  <div className="p-5 text-lg">
                    {children}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </body>
    </html>
  );
}