import React, { useState } from "react";
import Header from "../header/Header";
import styles from "../todayDiary/Today.module.css";
import Button from "../btn/Button";
import pen from "../../images/pen.png";
import { useLocation, useNavigate } from "react-router-dom";

const Edit = ({ deletList, editList }) => {
    const location = useLocation();
    const pick = location?.state.pick;

    const { date, emoji, diary } = location?.state.pick;

    const [newDiary, setNewDiary] = useState("");
    const [pickEmotion, setPickEmotion] = useState("");

    const nextNav = useNavigate();
    const listPage = () => {
        nextNav("/writelist");
    };

    const emotionIcon = [
        { id: 1, emotion: "π" },
        { id: 2, emotion: "π₯" },
        { id: 3, emotion: "π±" },
        { id: 4, emotion: "π₯°" },
        { id: 5, emotion: "π¨" },
    ];

    const emojiPick = (emoji) => {
        setPickEmotion(emoji.target.value);
    };

    const emotion = emotionIcon.map((emoji) => {
        return <input onClick={(value) => emojiPick(value)} type="button" value={emoji.emotion} key={emoji.id} />;
    });

    const onChange = (e) => {
        const newDiary = e.target.value;
        setNewDiary(newDiary);
    };
    const editBtn = () => {
        let newPick = { ...pick };
        newPick.emoji = pickEmotion || emoji;
        newPick.diary = newDiary || diary;
        editList(newPick);
        listPage();
    };

    const deleteBtn = () => {
        let result = window.confirm("μ­μ νμκ² μ΅λκΉ?");
        if (result) {
            alert("μ­μ λμμ΅λλ€");
            deletList(pick);
            listPage();
        }
        return;
    };

    return (
        <div className={styles.todayBox}>
            <div className={styles.titleBar}>
                <Header title={date} />
            </div>
            <section className={styles.emtion}>
                <div className={styles.question}>
                    <div className={styles.question}>μ€λμ λλ?</div>
                </div>
                {pickEmotion === "" ? <div className={styles.pickEmoji}>{emoji}</div> : <div className={styles.pickEmoji}>{pickEmotion}</div>}

                <ul className={styles.emtionBar}>{emotion}</ul>
            </section>
            <section className={styles.diary}>
                <img className={styles.pen} src={pen} alt="pen" />
                <div className={styles.diaryHeader}>νλ£¨λ₯Ό μ§§μ κΈλ‘ μ λ¦¬ν΄λ³΄μΈμ</div>

                <div className={styles.txTBox}>
                    <textarea
                        onChange={onChange} //
                        className={styles.diaryTxT}
                        maxLength="200"
                        type="text" //
                        placeholder="200μ λ΄λ‘ μλ ₯ν΄μ£ΌμΈμ!"
                        defaultValue={diary}
                    ></textarea>
                </div>

                <div className={styles.button}>
                    <Button text="μμ " onClick={editBtn}></Button>
                    <Button text="μ­μ " onClick={deleteBtn}></Button>
                </div>
            </section>
        </div>
    );
};

export default Edit;
