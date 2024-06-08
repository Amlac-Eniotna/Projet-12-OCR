import styles from "@/app/ui/contact/formulaire.module.css";

export function Formular() {
  return (
    <form className="flex h-full flex-col gap-4 xl:gap-6">
      <div className="flex flex-col justify-between gap-4 xl:flex-row xl:gap-6">
        <div className="w-full">
          <label className="whitespace-nowrap text-xl">Email :</label>
          <input
            className={`${styles.inputcolor} mt-2 w-full rounded bg-wmauve-2 p-2 text-2xl outline outline-2 outline-wmauve-4 dark:outline-mauve-6 dark:focus:outline-mauve-11`}
          ></input>
        </div>
        <div className="w-full">
          <label className="whitespace-nowrap text-xl">Objet :</label>
          <input
            className={`${styles.inputcolor} mt-2 w-full rounded bg-wmauve-2 p-2 text-2xl outline outline-2 outline-wmauve-4 dark:outline-mauve-6 dark:focus:outline-mauve-11`}
          ></input>
        </div>
      </div>
      <div className="flex h-full flex-col">
        <label className="whitespace-nowrap text-xl">Message :</label>
        <textarea
          className={`${styles.inputcolor} mt-2 h-full min-h-fit w-full resize-none rounded bg-wmauve-2 p-2 text-2xl outline outline-2 outline-wmauve-4 dark:outline-mauve-6 dark:focus:outline-mauve-11`}
        ></textarea>
      </div>
      <div className="flex justify-end">
        <button className="mb-4 rounded bg-wmauve-9 px-24 py-2 text-2xl xl:mb-6 dark:bg-mauve-9">
          Envoyer
        </button>
      </div>
    </form>
  );
}
