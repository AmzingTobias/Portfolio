import { MdEmail } from "react-icons/md";

const CONTACT_EMAIL = "tobias@tdmd.co.uk";

const Footer = () => {
  return (
    <footer className="items-center flex mx-auto justify-center mt-4">
      <div className="mx-0.5"></div>
      <a
        className="align-middle hover:font-semibold contents"
        href={`mailto:${CONTACT_EMAIL}`}
      >
        <MdEmail />
        &nbsp;{CONTACT_EMAIL}
      </a>
    </footer>
  );
};

export default Footer;
