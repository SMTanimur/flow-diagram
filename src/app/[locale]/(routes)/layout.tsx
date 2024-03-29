import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/sidebar';
import { useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

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
    
      <div className="flex flex-col h-full w-full overflow-hidden">
        <Header
    
          lang={locale}
        />
        <div className="flex-grow h-full ">{children}</div>
      
      </div>
    </div>
  );
}