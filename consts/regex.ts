export const REGEX = {
  name: /^[가-힣]{2,5}$/,
  email:
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i,
  password: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,10}$/,
  phoneNumber: /^[0-9]{11}$/i,
};
