import { User } from "../../../db/user.js"

// 비밀번호 변경
export async function changePW(U_NUM,NEW_PW){
    return User.findOne({where:{U_NUM}}).then((data) => {
        data.U_PW = NEW_PW;
        return data.save();
    });
}


