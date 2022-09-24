const romanToInt = function (s) {

    const o = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let rv = 0;
    let rn0;
    let rn1;

    for (let i = s.length - 1; i >= 0; i--) {

        rn0 = o[s[i]];
        rn1 = o[s[i - 1]];

        if (rn1 < rn0) {
            rv += (rn0 - rn1);
            i--;
        } else {
            rv += rn0;
        }
    }
    return rv;
};

console.log(romanToInt("LVIIII"))



function blue(str) {
    let res = str.split(" ");

    for (let i = 0; i < res.length; i++) {

        console.log(res[i] + " blue")
    }
}

function reverseBlue(str) {
    let res = str.split(" ");
    console.log("im here " + res.length)
    for (let i = res.length; i > 0; i--) {
        console.log(res[i] + " blue")
    }
}

blue("hello jon milk small")
reverseBlue("hello jon milk small")
