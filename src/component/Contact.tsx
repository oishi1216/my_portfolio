import React, { useRef } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
import { motion } from "framer-motion";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import emailjs from '@emailjs/browser';

const formWrapper = css`
  padding: 2em 0.5em 1em;
  margin: 0 auto;
  max-width: 1080px;
`

const formStyle = css`
  display: flex;
  flex-direction: column;
`

const requiredIcons = css`
  color: #ff0000;
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

const inputButtonStyle = css`
  width: fit-content;
  text-align: start;
  background-color: #fec463;
  padding: 1em;
  border-radius: 0.125em;
  border: .0625em solid #333;
`

const cloumnSize = css`
  margin-top: 1em;
`

export const Contact = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {
    const form = useRef<HTMLFormElement>(null);

    const sendEmail = (e: React.FormEvent) => {
      e.preventDefault();
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current!, import.meta.env.VITE_EMAILJS_PUBLIC_KEY )
      .then((result) => {
        console.log(result.text);
      },(error) => {
        console.log(error.text);
      });
    }

    return (
      <div id={id} ref={ref} css={common.wrapper}>
        <SlideScaleChange
          isIntersecting={isIntersecting}
        >
          <div css={common.contentWrapper}>
            <div css={formWrapper}>
              <form ref={form} onSubmit={sendEmail} css={formStyle}>
                <label>お名前 <span css={requiredIcons}>*</span></label>
                <input type="text" name="user_name" placeholder="あなたのお名前を入力してください。" css={inputTextStyle}/>
                <label css={cloumnSize}>メールアドレス <span css={requiredIcons}>*</span></label>
                <input type="email" name="user_email" placeholder="あなたのメールアドレスを入力してください。" css={inputTextStyle}/>
                <label css={cloumnSize}>メッセージ <span css={requiredIcons}>*</span></label>
                <textarea name="message" placeholder="お問合せの内容を入力してください。" css={[inputTextStyle, textareaStyle]}/>
                <motion.button type="submit" css={[inputButtonStyle, cloumnSize]} initial={{boxShadow: "0px 5px 0px #333"}} transition={{ duration: 0.3 }} whileHover={{ y: "5px", boxShadow: "0px 0px 0px #333" }}>お問合せ内容を送信</motion.button>
              </form>
            </div>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
