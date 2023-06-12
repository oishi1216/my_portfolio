import React, { useRef } from "react";
import { forwardRef } from "react";
import { ContainerProps } from "../types/Props";
import { SlideScaleChange } from "../hooks/useSlideScaleChange";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { common } from "../styles/common";
import emailjs from '@emailjs/browser';

export const Contact = forwardRef<HTMLDivElement, ContainerProps>(
  ({ id, isIntersecting }, ref) => {
    const form = useRef<HTMLDivElement>(null);

    const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY )
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
            <form ref={form} onSubmit={sendEmail}>
              <label>お名前 *</label>
              <input type="text" name="user_name" placeholder="あなたのお名前を入力してください。"/>
              <label>メールアドレス *</label>
              <input type="email" name="user_email" />
              <label>メッセージ *</label>
              <textarea name="message" />
              <input type="submit" value="Send" />
            </form>
          </div>
        </SlideScaleChange>
      </div>
    );
  }
);
