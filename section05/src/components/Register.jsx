import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

// 하나의 객체로 묶기!
const Register = () => {
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0); // 폼의 입력 변화 횟수 추적
  const inputRef = useRef(); // 이름 입력 필드에 접근해 포커스 제어하는 데 사용

  const onChange = (e) => {
    countRef.current++; // 입력필드 값이 변경될 때마다 1씩 증가
    console.log(countRef.current);

    setInput({
      ...input, // 기존 상태 유지
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus(); // 비어있으면 포커스
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder={"이름"}
          type="text"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value=""></option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
      </div>

      <button onClick={onSubmit}>제출</button>
    </div>
  );
};
export default Register;
