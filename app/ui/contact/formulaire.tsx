"use client";

import styles from "@/app/ui/contact/formulaire.module.css";

import { FormEvent, RefObject, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export function Formular() {
  const [opened, setOpened] = useState(false);
  const [sending, setSending] = useState(false);
  const [modalMsg, setModalMsg] = useState("Message Envoyer !");
  const form: RefObject<HTMLFormElement> = useRef(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    emailjs
      .sendForm(
        //@ts-ignore
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
        },
      )
      .then(
        () => {
          setModalMsg("Message Envoyer !");
          setOpened(true);
          setSending(false);
          console.log("SUCCESS!");
        },
        (error) => {
          setModalMsg(
            "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.",
          );
          setOpened(true);
          setSending(false);
          console.log("FAILED...", error.text);
        },
      );
  };

  return (
    <>
      {opened ? (
        <Modal onClick={() => setOpened(false)} msg={modalMsg} />
      ) : null}
      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex h-full flex-col gap-4 xl:gap-6"
      >
        <div className="flex flex-col justify-between gap-2 xl:flex-row xl:gap-6">
          <div className="w-full">
            <label
              className="whitespace-nowrap text-sm sm:text-xl"
              htmlFor="email"
            >
              Email :
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className={`${styles.inputcolor} mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11`}
            ></input>
          </div>
          <div className="w-full">
            <label
              className="whitespace-nowrap text-sm sm:text-xl"
              htmlFor="name"
            >
              Nom complet :
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className={`${styles.inputcolor} mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11`}
            ></input>
          </div>
        </div>
        <div className="w-full">
          <label
            className="whitespace-nowrap text-sm sm:text-xl"
            htmlFor="objet"
          >
            Objet :
          </label>
          <input
            type="text"
            name="objet"
            id="objet"
            required
            className={`${styles.inputcolor} mt-2 w-full rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11`}
          ></input>
        </div>
        <div className="flex h-full flex-col">
          <label
            className="whitespace-nowrap text-sm sm:text-xl"
            htmlFor="message"
          >
            Message :
          </label>
          <textarea
            name="message"
            id="message"
            required
            className={`${styles.inputcolor} xl:min-h-auto mt-2 h-full min-h-28 w-full resize-none rounded bg-wmauve-2 p-1 text-base outline outline-2 outline-wmauve-4 focus:outline-wmauve-11 xl:p-2 xl:text-xl dark:outline-mauve-6 dark:focus:outline-mauve-11`}
          ></textarea>
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="mb-2 rounded bg-wmauve-9 p-1 px-24 py-2 text-base text-wmauve-1 sm:text-xl xl:mb-6 xl:text-2xl dark:bg-mauve-9"
          >
            {sending ? "Envoi..." : "Envoyer"}
          </button>
        </div>
      </form>
    </>
  );
}

function Modal({ msg, onClick }: { msg: string; onClick: () => void }) {
  return (
    <div className="absolute z-50 flex h-full w-full items-center justify-center">
      <div className="flex h-3/5 w-3/5 flex-col items-center justify-between rounded border-2 border-wmauve-6 bg-wmauve-4 p-12 shadow-[0_10px_30px_0px_rgba(0,0,0,1)] dark:border-mauve-6 dark:bg-mauve-4">
        <h3 className="text text-2xl xl:text-4xl">{msg}</h3>
        <button
          className="rounded bg-wmauve-9 p-6 py-2 xl:px-24 dark:bg-mauve-9"
          onClick={onClick}
        >
          OK
        </button>
      </div>
    </div>
  );
}
