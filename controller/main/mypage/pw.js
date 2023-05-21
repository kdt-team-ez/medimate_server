import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import * as userRepository from '../../../data/main/mypage/pw.js';
import { config } from '../../../config.js';

export async function getByUNum(U_NUM){
    return User.findByPk(U_NUM);
}




// 비밀번호 변경----------------------------------------------
export async function changePassword(req, res){
    const { U_PW } = req.body;
    const hashed = await bcrypt.hash(U_PW, config.bcrypt.saltRounds);
    const userId = await userRepository.changePW(req.U_NUM,hashed)
    res.status(201).json({message:`비밀번호 변경이 완료되었습니다.`});
}


function createJwtToken(id){
    return jwt.sign({id}, config.jwt.secretKey, {expiresIn: config.jwt.expiresInSec});
}