import Bubble from "@/svg/speechBubble.svg";
import Apple from "@/svg/appleLogo.svg";
import Link from "next/link";

export default function SignInPage() {
  return (
    <section className="mx-auto mt-10 grid max-w-6xl justify-center">
      <h1 className="mb-6 text-xl font-bold">로그인</h1>
      <form action="" className="grid justify-center space-y-6">
        <input
          className="h-12 w-96 rounded-md border px-3 outline-none"
          type="email"
          placeholder="아이디(이메일주소)"
        />
        <input
          className="h-12 rounded-md border px-3 outline-none"
          type="password"
          placeholder="비밀번호"
        />
        <div className="flex items-center justify-between">
          <div className="font-medium">
            <input type="checkbox" className="mr-2 border" />
            <label htmlFor="">자동로그인</label>
          </div>
          <div className="flex text-xs">
            <p className="mr-3">아이디 찾기</p>
            <p>비밀번호 찾기</p>
          </div>
        </div>
        <section className="mt-4 grid text-sm">
          <Link href="" className="grid">
            <button className="rounded-md bg-stone-900 py-4 text-stone-50">
              로그인
            </button>
          </Link>
          <Link href="" className="grid">
            <button className="mt-4 rounded-md bg-[#fee500] py-4 text-stone-900">
              <div className="flex items-center justify-center">
                <Bubble />
                <p className="ml-1">카카오로 로그인하기</p>
              </div>
            </button>
          </Link>
          <section className="mb-10 grid items-center">
            <p className="mt-5 text-center text-base text-stone-500">
              비회원 주문조회
            </p>
            <p className="mt-10 text-center text-sm text-stone-700">
              SNS 계정 로그인/회원가입
            </p>
            <ul className="mt-4 flex justify-center gap-4">
              <li className="rounded-lg bg-green-600 px-2 text-lg font-black text-gray-50">
                N
              </li>
              <li className="rounded-lg bg-blue-600 px-3 text-xl font-black text-gray-50">
                f
              </li>
              <li className="grid items-center rounded-lg bg-stone-900 px-2 text-xl font-black text-gray-50">
                <Apple />
              </li>
            </ul>
          </section>
          <section>
            <Link href="/siginUp" className="grid">
              <button className="border border-stone-200 py-4 text-stone-900">
                이메일로 신규회원가입
              </button>
            </Link>
          </section>
        </section>
      </form>
    </section>
  );
}
