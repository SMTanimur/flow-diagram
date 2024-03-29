import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/sidebar";

type Props = {
  children: React.ReactNode;
  params: { locale: string };
};

export default function NewDestinationHeader({
  children,
  params: { locale },
}: Props) {
  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar />
  
    
        <div className="flex-grow  h-full p-5">{children}</div>
  
 
    </div>
  );
}
