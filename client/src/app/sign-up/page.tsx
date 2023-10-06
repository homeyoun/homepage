import React from "react";
import PaddingContainer from "../layout/PaddingContainer";
import { ArrowBigRight, MoveUp } from "lucide-react";
import Link from "next/link";

const SignUp = () => {
  return (
    <section>
      <PaddingContainer>
        <ul className="mt-7">
          <li className="text-2xl text-stone-700 font-medium ml-14">
            빠른 결제를 위해 로그인 하세요.
          </li>
          <li className="grid mt-16 w-2/4 mx-auto">
            <div className="text-2xl font-bold text-stone-800 text-center">
              귀목플라워에 로그인 하세요
            </div>
            <div className="relative">
              <input
                type="text"
                className="border mt-9 rounded-lg p-3 w-full placeholder:text-sm"
                placeholder="이메일 또는 전화번호"
              />
              <button className="border p-1 rounded-full text-stone-500 absolute right-3 top-12">
                <ArrowBigRight width={18} height={18} />
              </button>
            </div>
            <div className="my-10 flex justify-center items-center">
              <input type="checkbox" />
              <div className="ml-2 text-sm">아이디 저장</div>
            </div>
            <div className="text-xs flex justify-center items-center text-red-600 font-medium">
              <div>패스워드를 모르십니까?</div>
              <div>
                <MoveUp width={12} height={12} />
              </div>
            </div>
            <div className="mt-4 text-xs flex justify-center">
              <div>아이디가 없으십니까?</div>
              <div className=" text-red-600 ml-2 flex items-center font-medium">
                <div>
                  <Link href="/sign-in">지금 만드세요</Link>
                </div>
                <MoveUp width={12} height={12} />
              </div>
            </div>
          </li>
        </ul>
      </PaddingContainer>
      <div className="mt-72 border-t border-stone-300">
        <div className="max-w-5xl mx-auto mt-5 pl-10">
          도움이 더 필요하신가요? 지금 채팅하기(새 창에서 열림) 또는
          080-330-8877 번호로 문의하세요
        </div>
      </div>
    </section>
  );
};

export default SignUp;
