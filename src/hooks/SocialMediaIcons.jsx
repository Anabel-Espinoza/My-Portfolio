import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start gap-6">
      <a
        className="text-pink text-3xl hover:text-yellow transition duration-500"
        href="https://www.linkedin.com/in/anabel-espinoza-95b4b5264/"
        target="_blank"
      > 
        <AiFillLinkedin />
      </a>
      <a
        className="text-pink text-3xl hover:text-yellow transition duration-500"
        href="https://github.com/Anabel-Espinoza"
        target="_blank"
      >
        <AiFillGithub />
      </a>
      <a
        className="text-pink text-3xl hover:text-yellow transition duration-500"
        href="mailto: anabel.espinoza@gmail.com"
        target="_blank"
      >
        <AiOutlineMail />
      </a>
    </div>
  );
};

export default SocialMediaIcons;
