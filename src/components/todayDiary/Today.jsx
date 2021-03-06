import React, { useRef, useState, memo } from "react";
import Header from "../header/Header";
import styles from "./Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useNavigate } from "react-router-dom";

const Today = memo(({ addList }) => {
    const nextNav = useNavigate();

    const diaryRef = useRef();
    const [pickEmotion, setPickEmotion] = useState();
    const emotionIcon = [
        { id: 1, emotion: "π" },
        { id: 2, emotion: "π₯" },
        { id: 3, emotion: "π±" },
        { id: 4, emotion: "π₯°" },
        { id: 5, emotion: "π¨" },
    ];

    const editDate = () => {
        const today = new Date();
        let year = today.getFullYear();
        const yearString = year.toString();
        year = yearString.substring(2, 4);
        const month = ("0" + (today.getMonth() + 1)).slice(-2);
        const day = ("0" + today.getDate()).slice(-2);
        const date = year + "-" + month + "-" + day;
        return date;
    };
    const emojiPick = (emoji) => {
        setPickEmotion(emoji.target.value);
    };

    const returnList = () => {
        nextNav("/writelist");

        const diary = diaryRef.current.value;

        const day = {
            id: Date.now(),
            date: editDate(),
            emoji: pickEmotion,
            diary,
        };
        addList(day);
    };

    const emotion = emotionIcon.map((emoji) => {
        return <input onClick={(value) => emojiPick(value)} type="button" value={emoji.emotion} key={emoji.id} />;
    });

    return (
        <div className={styles.todayBox}>
            <div className={styles.titleBar}>
                <Header title="μ€λμ μΌκΈ°" />
            </div>
            <section className={styles.emtion}>
                <div className={styles.question}>μ€λμ λλ?</div>
                <div className={styles.pickEmoji}>{pickEmotion}</div>

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>

            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>νλ£¨λ₯Ό μ§§μ κΈλ‘ μ λ¦¬ν΄λ³΄μΈμ</div>

                <div className={styles.txTBox}>
                    {" "}
                    <textarea ref={diaryRef} className={styles.diaryTxT} defalutvalue="" maxLength="200" type="text" placeholder="200μ λ΄λ‘ μλ ₯ν΄μ£ΌμΈμ!" />
                </div>

                <div className={styles.button}>
                    <Button text="μλ ₯" onClick={returnList}></Button>
                </div>
            </section>
        </div>
    );
});

export default Today;
