const local = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const { User } = require('../models');

module.exports = (passport) => {
    // 사용자 정보 객체를 세션에 아이디로 저장
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // 세션에 저장한 아이디를 통해 사용자 정보 객체를 불러오는 것.
    passport.deserializeUser((id, done) => {
        User.find({ where: { id } })
            .then(user => done(null, user))
            .catch(err => done(err));
    });

    local(passport);
    kakao(passport);
};