import React, { useEffect, useRef, useState } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
import { motion } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import emailjs from '@emailjs/browser';
import { useCheckText } from "../hooks/useCheckText";
import { mailModalsData } from"../data/PortfolioData";
import { Modal } from "../hooks/useModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const formWrapper = css`
  padding: 2em 0 1em;
  margin: 0 auto;
  width: 70%;
  max-width: 1080px;
`

const formStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: .5em;
`

const requiredIcons = css`
  color: #ff0000;
`

const labelStaylePC = css`
  display: flex;
  justify-content: space-between;
  align-items:flex-end;
`

const labelStayleSP = css`
  display: flex;
  flex-direction: column;
`

const inputTextStyle = css`
  background-color: #fff;
  border-radius: 0.125em;
  padding: 0.3em 0.5em;
  border: .0625em solid #708090;
`

const textareaStyle = css`
  height: 15em;
`

const inputButtonStylePC = css`
  width: fit-content;
  text-align: start;
  background-color: #fec463;
  padding: 1em;
  border-radius: 0.125em;
  border: .0625em solid #333;

  &:disabled {
    color: rgba(51, 51, 51, .3);
    background-color: rgba(254, 196, 99, .3);
  }
`

const inputButtonStyleSP = css`
  text-align: center;
  background-color: #fec463;
  padding: 1em;
  border-radius: 0.125em;
  border: .0625em solid #333;

  &:disabled {
    color: rgba(51, 51, 51, .3);
    background-color: rgba(254, 196, 99, .3);
  }
`

const cloumnSize = css`
  margin-top: 1em;
`

const annotationOK = css`
  position: relative;
  color: #25AF01;
  font-size: .8em;

  &:before {
    content: '';
    display: block;
    position: absolute;
    top: .4em;
    left: -1.3em;
    width: 1em;
    height: .5em;
    border-left: .125em solid #25AF01;
    border-bottom: .125em solid #25AF01;
    transform: rotate(-45deg);
  }
`

const annotationNG = css`
  position: relative;
  color: #ff0000;
  font-size: .8em;

  &:before {
    content: "";
    position: absolute;
    top: .2em;
    left: -.9em;
    width: .125em;
    height: 1.1em;
    background-color: #ff0000;
    transform: rotate(45deg);
  }

  &:after {
    content: "";
    position: absolute;
    top: .2em;
    left: -.9em;
    width: .125em;
    height: 1.1em;
    background-color: #ff0000;
    transform: rotate(135deg);
  }
`

const annotationMarginSP = css`
  margin-left: 1.5em;
`

const modalCloseBtn = css`
  position: absolute;
  top: .1em;
  right: 0.5em;
  font-size: 1.5em;
  cursor: pointer;
  color: #333;
  z-index: 1;
`;

const modalOKTitleStyle = css`
  color: #25AF01;
  font-size: 1.5em;
`

const modalNGTitleStyle = css`
  color: #ff0000;
  font-size: 1.5em;
`
const modalTextStyle = css`
  margin-top: 1em;
`

const headlineIconStyle = css`
  font-size: 1em;
  margin-right: 0.3em;
`

export const Contact = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting, isDesktop }, ref) => {
    const form = useRef<HTMLFormElement>(null);
    const [nameFlag, setNameFlag] = useState<Array<boolean>>([false, false]);
    const [emailFlag, setEmailFlag] = useState<Array<boolean>>([false, false]);
    const [messageFlag, setMessageFlag] = useState<boolean>(false);
    const [submitFlag, setSubmitFlag] = useState<boolean>(true);
    const [openMailModals, setOpenMailModals] = useState<Array<boolean>>([false, false]);


    const { checkText } = useCheckText();

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current!, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
        const modalArr = [...openMailModals];
        modalArr[0] = true;
        setOpenMailModals(modalArr);
        form.current?.reset();
        setNameFlag([false, false]);
        setEmailFlag([false, false]);
        setMessageFlag(false);
      },(error) => {
        const modalArr = [...openMailModals];
        modalArr[1] = true;
        setOpenMailModals(modalArr);
      });
    }

    const onChangeNameFlag = (e:React.ChangeEvent<HTMLInputElement>) => {
      const newNameFlag = checkText(nameFlag, e.target.value, 'name');
      setNameFlag(newNameFlag);
    }

    const onChangeEmailFlag = (e:React.ChangeEvent<HTMLInputElement>) => {
      const newEmailFlag = checkText(emailFlag, e.target.value, 'email');
      setEmailFlag(newEmailFlag);
    }

    const onChangeMessageFlag = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      const newMessage = e.target.value !== '' ? true : false;
      setMessageFlag(newMessage);
    }

    const onClickChangeMailModal = (index: number) => {
      const modalArr = openMailModals.map((modal, idx) => {
        return idx === index ? !modal : modal;
      })

      setOpenMailModals(modalArr)
    }

    useEffect(() => {
      nameFlag[1] && emailFlag[1] && messageFlag ? setSubmitFlag(false) : setSubmitFlag(true);
    }, [nameFlag, emailFlag, messageFlag]);

    return (
      <div id={id} ref={ref} css={isDesktop ? common.wrapperPC : common.wrapperSP}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={isDesktop ? common.contentWrapperPC : common.contentWrapperSP}>
            <div css={formWrapper}>
              {!isDesktop &&
                <h2 css={common.headlineTitleSP}><FontAwesomeIcon icon={faEnvelope} css={headlineIconStyle} />Contact</h2>
              }
              <form ref={form} onSubmit={sendEmail} css={formStyle}>
                <label css={isDesktop ? labelStaylePC : labelStayleSP}><span>お名前 <span css={requiredIcons}>*</span></span>{nameFlag[0] ? nameFlag[1] ? <span css={isDesktop ? annotationOK : [annotationOK, annotationMarginSP]}>OK</span> : <span css={isDesktop ? annotationNG : [annotationNG, annotationMarginSP]}>名前に記号が含まれています</span> : <span css={isDesktop ? annotationNG : [annotationNG, annotationMarginSP]}>名前を入力してください</span>}</label>
                <input type="text" name="user_name" placeholder="お名前を入力してください。" css={inputTextStyle} onChange={onChangeNameFlag}/>
                <label css={isDesktop ? [labelStaylePC, cloumnSize] : [labelStayleSP, cloumnSize]}><span>メールアドレス <span css={requiredIcons}>*</span></span>{emailFlag[0] ? emailFlag[1] ? <span css={isDesktop ? annotationOK : [annotationOK, annotationMarginSP]}>OK</span> : <span css={isDesktop ? annotationNG : [annotationNG, annotationMarginSP]}>メールアドレスの形式が正しくありません</span> : <span css={isDesktop ? annotationNG : [annotationNG, annotationMarginSP]}>メールアドレスを入力してください</span>} </label>
                <input type="email" name="user_email" placeholder="メールアドレスを入力してください。" css={inputTextStyle} onChange={onChangeEmailFlag}/>
                <label css={isDesktop ? [labelStaylePC, cloumnSize] : [labelStayleSP, cloumnSize]}><span>メッセージ <span css={requiredIcons}>*</span></span>{messageFlag ? <span css={isDesktop ? annotationOK : [annotationOK, annotationMarginSP]}>OK</span> : <span css={isDesktop ? annotationNG : [annotationNG, annotationMarginSP]}>お問合せ内容を入力してください</span>}</label>
                <textarea name="message" placeholder="お問合せの内容を入力してください。" css={[inputTextStyle, textareaStyle]} onChange={onChangeMessageFlag}/>
                <motion.button disabled={submitFlag} type="submit" css={isDesktop ? [inputButtonStylePC, cloumnSize] : [inputButtonStyleSP, cloumnSize]} initial={{boxShadow: "0px 5px 0px #333"}} transition={{ duration: 0.2 }} whileHover={ submitFlag ? {} : { y: "5px", boxShadow: "0px 0px 0px #333" }}>お問合せ内容を送信</motion.button>
              </form>
            </div>
            {mailModalsData.map((modal, index) => {
              return(
                <Modal key={modal.id} index={index} openModals={openMailModals} onClose={() => onClickChangeMailModal(index)}>
                  <div css={modalCloseBtn} onClick={() => onClickChangeMailModal(index)}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                  </div>
                  <div>
                    <h4 css={index === 0 ? modalOKTitleStyle : modalNGTitleStyle}>{modal.title}</h4>
                    <p css={modalTextStyle}>{modal.text1}<br />{modal.text2}</p>
                  </div>
                </Modal>
              )
            })}
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
