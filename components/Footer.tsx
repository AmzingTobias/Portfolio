import { MdEmail } from "react-icons/md";
import { AiFillGithub } from "react-icons/ai";

const CONTACT_EMAIL = "tobias@tdmd.co.uk";

const Footer = () => {
  return (
    <footer className="items-center flex mx-auto justify-center mt-4">
      <div className="mx-0.5"></div>
      <div className="flex items-center flex-col-reverse sm:flex-row">
        <a
          className="align-middle hover:font-semibold w-full mt-3 text-lg flex justify-center items-center"
          href={`mailto:${CONTACT_EMAIL}`}
        >
          <MdEmail />
          &nbsp;{CONTACT_EMAIL}
        </a>
        <div className="mx-3"></div>
        <a
          target="_blank"
          className="align-middle hover:font-semibold w-full mt-3 text-lg flex justify-center items-center"
          href={`https://github.com/AmzingTobias`}
        >
          <AiFillGithub />
          &nbsp;GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
