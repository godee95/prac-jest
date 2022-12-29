// validation.js

// value는 이메일 값을 의미. string 형태로 들어온다고 생각.
module.exports = {
    // 입력한 이메일 주소에는 "@" 문자가 1개만 있어야 이메일 형식이다.
    // 입력한 이메일 주소에 공백(스페이스)이 존재하면 이메일 형식이 아니다.
    // 입력한 이메일 주소 맨 앞에 하이픈(-)이 있으면 이메일 형식이 아니다.
    // 입력한 이메일 주소중, 로컬 파트(골뱅이 기준 앞부분)에는 영문 대소문자와 숫자, 특수문자는 덧셈기호(+), 하이픈(-), 언더바(_) 3개 외에 다른 값이 존재하면 이메일 형식이 아니다.
    // 입력한 이메일 주소중, 도메인(골뱅이 기준 뒷부분)에는 영문 대소문자와 숫자, 점(.), 하이픈(-) 외에 다른 값이 존재하면 이메일 형식이 아니다.
    isEmail: (value) => {
        const email = (value || ''); // value값이 없으면 빈 문자열값을 넣어줌.
        const [localPart, domain, ...etc] = email.split('@');

        if(!localPart || !domain || etc.length){
            return false;
        }else if(email.includes(' ')){
            return false;
        }else if(email[0] === '-'){
            return false;
        }else if(!/^[a-z0-9+_-]+$/gi.test(localPart)){
            return false;
        }else if(!/^[a-z0-9.-]+$/gi.test(domain)){
            return false;
        }

        
        // for(const word of localPart.toLowerCase().split('')){
        //     if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-","+","_"].includes(word)){
        //         return false;
        //     }
        // }
        // for(const word of domain.toLowerCase().split('')){
        //     if (!["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9","-", "."].includes(word)){
        //         return false;
        //     }
        // }

        return true;
    },
};