import { Announcement } from '../../db/announcement.js';
import { User } from '../../db/user.js';
import { Sequelize } from 'sequelize';
import {Op} from 'sequelize';

// announcement table과 user table을 join하기 위한 객체
export const JOIN_TABLE = {
    attributes: [
        'A_NUM',
        'A_TITLE',
        'A_DATE',
        'A_CONTENT',
        'U_NUM'
        // user테이블의 U_NAME 컬럼을 join
        [Sequelize.col('user.U_NAME'), 'U_NAME'],
    ],
    include: {
        // join할 테이블을 설정
        model: User,
        attributes: []
    }
}

// 생성
export async function insert(info){
    return Announcement.create(info)
    .then((data) => data.dataValues.U_NUM);
}

// UNUM으로 찾기
export async function getByUNum(U_NUM){
    return Announcement.findAll({ where: { U_NUM }});
}


// 공지사항번호로 찾기
export async function getByAnnounceNum(A_NUM){
    return Announcement.findByPk(A_NUM)
}

// 공지사항 제목으로 찾기
export async function getByTitle(A_TITLE){
    return Announcement.findAll({ where: { A_TITLE}});
}

// 전체 출력 (페이지네이션 기능 추가)
export async function getAll(page){
    let limit = 10;
    let offset = (page - 1) * limit;
    return Announcement.findAndCountAll({
        limit,
        offset,
        order: [
            ['A_NUM', 'DESC']
        ]
    });
}

// 수정
export async function update(A_NUM, td_announcement){
    return Announcement.findByPk(A_NUM)
    .then((oldAnnounce) => {
            oldAnnounce.A_TITLE = td_announcement.A_TITLE;
            oldAnnounce.A_CONTENT = td_announcement.A_CONTENT;
        return oldAnnounce.save();
    });
}

// 삭제
export async function remove(A_NUM){
        return Announcement.findByPk(A_NUM).then((data)=>{data.destroy()})
    }