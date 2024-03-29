

import { Separator } from "@/components/ui/separator";

import Feedback from "./Feedback";
import FulltextSearch from "./FulltextSearch";
import LocaleSwitcher from "./LocaleSwitcher";
import Link from "next/link";

type Props = {

  lang: string;
}

const Header = ({  lang }: Props) => {
  return (
    <>
      <div className=" container flex h-20 justify-between items-center p-5 space-x-5">
        <div className="flex justify-center ">
          <FulltextSearch />
        </div>
        <div className="flex items-center gap-3">
          <LocaleSwitcher  />
          <Feedback />
          <Link
          href={"/dashboard"}
          >
            Dashboard
          </Link>
        </div>
      </div>
      <Separator />
    </>
  );
};

export default Header;
