import Topbar from "@/components/topbar/topbar";
import "github-markdown-css/github-markdown-dark.css"
import 'highlight.js/styles/github-dark.css'

export default function aboutLayout({ children }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ch">
        <body>
          <div className="flex flex-col h-screen overflow-auto bg-[#0d1117] text-white">
            <Topbar />
            <div className="flex-grow mt-10 mb-16">
              <div className="flex justify-center">
                <div className="markdown-body w-[1190px] p-[45px]">
                  {children}
                </div>
              </div>
            </div>
          </div>
        </body>
    </html>
  );
}