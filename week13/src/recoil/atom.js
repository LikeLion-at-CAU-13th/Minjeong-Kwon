import { atom } from "recoil";

export const UserNameAtom = atom ({
    key: "user",
    default: "아기사자",
});

export const emailAtom = atom ({
    key: "email",
    default: "likelion@cau.ac.kr",
})

export const isSumittedAtom = atom ({
    key: "isSumitted",
    default: false,
})

export const dateAtom = atom ({
    key: "date",
    default: '',
})