"use client";
import { CircleAlert } from "lucide-react";
import { Formik } from "formik";
import * as Yup from "yup";
import { REGEX } from "@/consts/regex";
import { useState } from "react";
interface MyFormVvalues {
  name: string;
  email: string;
  password: string;
  rePassword: string;
  birthDate: string;
  phoneNumber: string;
}

interface OtherProps {
  message: string;
}

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(REGEX.name, "한글로 입력해주세요")
    .min(2, "이름이 너무 짧습니다.")
    .max(5, "이름이 너무 깁니다.")
    .required("이름은 필수 입력항목입니다."),
  email: Yup.string()
    .email("이메일을 잘못입력하셨습니다.")
    .required("이메일은 필수 입력항목입니다."),
  password: Yup.string().min(7, "비밀번호는 최소 7자 이상입니다."),
  rePassword: Yup.string()
    .min(7, "비밀번호는 최소 7자 이상입니다.")
    .oneOf([Yup.ref("password")], "비밀번호가 일치해야 합니다.")
    .required("비밀번호를 다시 입력하세요"),

  birthDate: Yup.string(),
  phoneNumber: Yup.string().matches(
    REGEX.phoneNumber,
    "번호는 01012345678형태로 입력해주세요",
  ),
});

export default function SignUpPage() {
  const initialValues: MyFormVvalues = {
    name: "",
    email: "",
    password: "",
    rePassword: "",
    birthDate: "",
    phoneNumber: "",
  };
  const [focus, setFocus] = useState(false);
  return (
    <section className="mx-auto mt-10 grid max-w-6xl justify-center text-center">
      <h1 className="mb-2 text-2xl font-bold">귀목플라워 회원가입</h1>
      <h2 className="mb-5">회원가입으로 혜택을 누려보세요.</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {}}
        className="grid w-96 justify-center"
      >
        {({ values, errors, handleChange, handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit} className="grid w-96">
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={values.name}
              className="h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder="이름"
            />
            <p className="my-3 flex items-center text-left text-xs text-red-600">
              {errors.name && <CircleAlert className="mr-1 w-3" />}
              {errors.name}
            </p>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              className="h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder="이메일"
            />
            <h1 className="mt-2 text-left text-xs text-stone-500">
              로그인에 사용할 이메일 입니다.
            </h1>
            <p className="my-3 flex items-center text-left text-xs text-red-600">
              {errors.email && <CircleAlert className="mr-1 w-3" />}
              {errors.email}
            </p>
            <hr className="" />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              className="mt-5 h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder="비밀번호"
            />
            <p className="my-3 flex items-center text-left text-xs text-red-600">
              {errors.password && <CircleAlert className="mr-1 w-3" />}
              {errors.password}
            </p>
            <input
              type="password"
              name="rePassword"
              onChange={handleChange}
              value={values.rePassword}
              className="h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder="비밀번호 확인"
            />
            <p className="my-3 flex items-center text-left text-xs text-red-600">
              {errors.rePassword && <CircleAlert className="mr-1 w-3" />}
              {errors.rePassword}
            </p>
            <hr className="mb-5" />
            <input
              type="text"
              name="birthDate"
              onChange={handleChange}
              value={values.birthDate}
              onFocus={() => setFocus(true)}
              onBlur={() => setFocus(false)}
              className="h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder={focus ? "YYYYMMDD" : "생년월일"}
            />
            <p className="mt-2 text-left text-xs text-stone-500">
              19831222의 형식으로 입력해 주세요
            </p>
            <p className="my-3 text-left text-xs text-red-600"></p>
            <input
              type="text"
              name="phoneNumber"
              onChange={handleChange}
              value={values.phoneNumber}
              className="h-14 rounded-md border border-stone-300 px-4 text-sm outline-none"
              placeholder="휴대폰번호"
            />
            <h1 className="mt-2 text-left text-xs text-stone-500">
              항상 사용하는 휴대폰 번호를 입력해주세요.비상시에 꼭 연락할 수
              있는 번호가 필요합니다.
            </h1>
            <p className="my-3 text-left text-xs text-red-600"></p>
            <hr className="mb-5" />
            <div className="mb-5 flex items-start text-left">
              <input type="checkbox" />
              <div className="-mt-1 ml-3 text-stone-700">
                <h1>귀목플라워 이용약관</h1>
              </div>
            </div>
            <hr className="mb-5" />
            <div className="mb-5 flex items-start text-left">
              <input type="checkbox" />
              <div className="-mt-1 ml-3">
                <h1 className="text-stone-700">공지사항</h1>
                <h2 className="mt-1 text-xs text-stone-500">
                  귀목플라워 제품,서비스에 대한 공지사항,마케팅 이메을
                  수신합니다.
                </h2>
              </div>
            </div>
            <div className="mb-5 flex items-start text-left">
              <input type="checkbox" />
              <div className="-mt-1 ml-3">
                <h1 className="text-stone-700">할인,홈페이지 관련 변경사항</h1>
                <h2 className="mt-1 text-xs text-stone-500">
                  할인,홈페이지관련 변경사항 등에 대한 이메일을 수신합니다
                </h2>
              </div>
            </div>
            <hr className="mb-5" />
            <div className="mb-7 flex items-start text-left">
              <input type="checkbox" />
              <div className="-mt-1 ml-3">
                <h1 className="text-stone-700">
                  귀목플라워 개인정보 수집및 이용안내,개인정보 제3자
                  동의,개인정보 처리 위탁을 동의합니다
                </h1>
              </div>
            </div>
            <button
              type="submit"
              className="mb-10 rounded-md bg-stone-700 py-4 text-stone-50"
            >
              회원가입
            </button>
          </form>
        )}
      </Formik>
    </section>
  );
}
