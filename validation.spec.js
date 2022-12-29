// validation.spec.js

const { isEmail } = require("./validation");

test('입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.', () => {
    // 여기에 테스트코드를 채워주세요!
    expect(isEmail("sparta84@gmail.com")).toEqual(true);
    expect(isEmail("sparta84@@@@gmail.com")).toEqual(false);
    expect(isEmail("sparta84gmail.com")).toEqual(false);
});

test("입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.", () => {
    // 여기에 테스트코드를 채워주세요!
    expect(isEmail("archepro8484@gmail.com")).toEqual(true);
    expect(isEmail("arche pro8484@gmail.com")).toEqual(false);
    expect(isEmail("archepro8484@gma il.com")).toEqual(false);
});

test("입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.", () => {
    // 여기에 테스트코드를 채워주세요!
    expect(isEmail("sparta94@gmail.com")).toEqual(true);
    expect(isEmail("-sparta94@gmail.com")).toEqual(false);
    expect(isEmail("-----sparta94@gmail.com")).toEqual(false);
    expect(isEmail("sp-arta94-@gm-ai----l-.com")).toEqual(true);
});

test("입력한 이메일 주소중, 로컬 파트(골뱅이 기준 앞부분)에는 영문 대소문자와 숫자, \
 특수문자는 덧셈기호(+), 하이픈(-), 언더바(_) 3개 외에 \
 다른 값이 존재하면 이메일 형식이 아니다.", () =>{
    expect(isEmail("sparta94@gmail.com")).toEqual(true);
    expect(isEmail("s||p.a/rta,94@gmail.com")).toEqual(false);
    expect(isEmail(";sp:a==rta94@gmail.com")).toEqual(false);
    expect(isEmail("s()pa{}rt[]a94@gmail.com")).toEqual(false);
});

test("입력한 이메일 주소중, 도메인(골뱅이 기준 뒷부분)에는\
 영문 대소문자와 숫자, 점(.), 하이픈(-) 외에 \
 다른 값이 존재하면 이메일 형식이 아니다.", () =>{
    expect(isEmail("sparta94@gmail.com")).toEqual(true);
    expect(isEmail("sparta94@g[]mail.com")).toEqual(false);
    expect(isEmail("sparta94@gm{}a:;;;il.co||m")).toEqual(false);
    expect(isEmail("sparta94@gma$#il.co==m--")).toEqual(false);
 })