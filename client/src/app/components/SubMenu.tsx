import React from "react";
import Image from "next/image";
import Link from "next/link";

const SubMenu = () => {
  return (
    <div className="mt-10 max-w-3xl mx-auto px-3 text-stone-600 font-extralight">
      <ul className="flex justify-between text-sm">
        <li className="justify-center">
          <Link href="/">
            <div className="rounded-full overflow-hidden border border-stone-200 ">
              <Image
                className=" hover:scale-110 transition-scale duration-200"
                src="/image/SubMenu/0230030002082.jpg"
                alt=""
                width={90}
                height={90}
              />
            </div>
            <div className="text-center mt-2">생일/기념일</div>
          </Link>
        </li>
        <li className="justify-center">
          <Link href="/">
            <div className="rounded-full overflow-hidden border border-stone-200">
              <Image
                className=" hover:scale-110 transition-scale duration-200"
                src="/image/SubMenu/0250040001442.jpg"
                alt=""
                width={90}
                height={90}
              />
            </div>
            <div className="text-center mt-2">개업/이전</div>
          </Link>
        </li>
        <li>
          <Link href="/">
            <div className="rounded-full overflow-hidden border border-stone-200">
              <Image
                className=" hover:scale-110 transition-scale duration-200"
                src="/image/SubMenu/0630000000072.jpg"
                alt=""
                width={90}
                height={90}
              />
            </div>
            <div className="text-center mt-2">결혼식/행사</div>
          </Link>
        </li>
        <li>
          <div className="rounded-full overflow-hidden border border-stone-200">
            <Image
              className=" hover:scale-110 transition-scale duration-200"
              src="/image/SubMenu/0430000000072.jpg"
              alt=""
              width={90}
              height={90}
            />
          </div>
          <div className="text-center mt-2">추모/근조</div>
        </li>
        <li>
          <div className="rounded-full overflow-hidden border border-stone-200">
            <Image
              className=" hover:scale-110 transition-scale duration-200"
              src="/image/SubMenu/0260010000212.jpg"
              alt=""
              width={90}
              height={90}
            />
          </div>
          <div className="text-center mt-2">승진/취임</div>
        </li>
        <li>
          <div className="rounded-full overflow-hidden border border-stone-200">
            <Image
              className=" hover:scale-110 transition-scale duration-200"
              src="/image/SubMenu/0440000003262.jpg"
              alt=""
              width={90}
              height={90}
            />
          </div>
          <div className="text-center mt-2">출산선물</div>
        </li>
      </ul>
    </div>
  );
};

export default SubMenu;
