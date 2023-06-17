import portfolio from "../assets/portfolio_thumbnail.png";
import portfolio_home from "../assets/portfolio_home_slide.png";
import portfolio_skills from "../assets/portfolio_skills_slide.png";

export const worksData = [
    {
        id: 1,
        alt: "ポートフォリオサイト",
        img: portfolio,
        title: "Portfolio Sites",
    },

]

export const modalsData = [
    {
        id: 101,
        siteTitle: "Portfolio Sites",
        siteDescription: "このページです。ReactとTypeScriptで作成しております。HOMEの雪のアニメーションはparticles.jsを使用し、それ以外のアニメーションはframer-motionで実装しています。",
        languageDescription: "HTML/CSS, React, TypeScript, emotion, framer-motion, particles.js, emailjs",
        Images: [
            { id: "a", image: portfolio_home, alt: "ポートフォリオサイトのホームセクション" },
            { id: "b", image: portfolio_skills, alt: "ポートフォリオサイトのスキルセクション" },
        ]
    }
]

export const mailModalsData = [
    {
        id: 1,
        title: '送信成功',
        text1: 'お問合せの送信が完了しました。',
        text2: '内容を確認後、ご記入いただいたメールアドレスに返信いたしますのでしばらくお待ちください。'
    },
    {
        id: 2,
        title: '送信失敗',
        text1: 'お問合せの送信に失敗しました。',
        text2: 'お手数ですが時間を置いてから再度送信いただけますと幸いです。'
    }
]