import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="flex justify-center items-center p-8">
      <div className="flex flex-col items-center space-y-4">
        <p className="text-sm font-normal text-gray-400">© Copyright Minute for AI 2024</p>
        <div className="flex space-x-4">
          <Link
            to="/gencast/privacy"
            className="text-sm text-gray-400 hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            to="/gencast/terms"
            className="text-sm text-gray-400 hover:underline"
          >
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
