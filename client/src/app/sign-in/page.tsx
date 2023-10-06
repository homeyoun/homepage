import React from "react";
import PaddingContainer from "../layout/PaddingContainer";

const SignIn = () => {
  return (
    <PaddingContainer>
      <div className="grid justify-center text-center">
        <h1 className="text-2xl text-stone-700 font-semibold mt-7">
          귀목플라워에 회원가입 하세요
        </h1>
        <h2 className="text-sm mt-4 text-stone-500">
          회원가입하시면 장바구니 기능과 포인트를 얻으실수 있습니다.
        </h2>
        <h2 className="text-sm mt-2 text-stone-500">
          아이디가 있으십니까?
          <span className=" text-red-600"> 아이디 찾아보기</span>
        </h2>
      </div>

      <form className="mt-7 flex flex-col items-center space-y-7">
        <input
          type="text"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="이름"
        />
        <input
          type="text"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="생년월일"
        />
        <hr className="w-full" />
        <input
          type="email"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="name@gwimok.com"
        />
        <input
          type="password"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="비밀번호"
        />
        <input
          type="password"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="비밀번호 확인"
        />
        <hr className="w-full" />
        <input
          type="text"
          className="border p-3 border-stone-300 w-[450px] rounded-md"
          placeholder="전화번호"
        />
        <hr className="w-full" />
        <div className="flex w-[450px] items-start">
          <input type="checkbox" className="mt-1 border-none w-5" />
          <h1 className="text-sm text-stone-600 ml-3">
            귀목플라워의 개인정보 처리방침새 윈도우에서 열림에 따라 개인 정보를
            수집, 사용, 타사에 대한 제공 및 처리하는 데 동의합니다.
          </h1>
        </div>

        <button type="submit" className="bg-red-600 px-28 py-4 text-red-50">
          회원가입
        </button>
      </form>
    </PaddingContainer>
  );
};

export default SignIn;
