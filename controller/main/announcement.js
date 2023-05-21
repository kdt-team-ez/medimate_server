import * as dataRepository from '../../data/main/announcement.js';

// 이름으로 찾기 출력
export async function getAnnounceByTitle(req,res){
    const {A_TITLE} = req.body;
    const page = req.params.id;
    if (data) { await dataRepository.getByTitle({A_TITLE}, page);
    res.status(200).json(data);
} else {
    res.status(404).json(data)
}};

// 전체 출력 (페이지네이션 기능 추가)
export async function getAllAnnounce(req,res){
    const U_NUM  = req.query.U_NUM || req.U_NUM;
    const found = await dataRepository.getByUNum(U_NUM)
    if (!found) {
        res.status(400).json({message: `공지사항 전체출력오류`})
    } else {
        res.status(200).json(found)
    }
};