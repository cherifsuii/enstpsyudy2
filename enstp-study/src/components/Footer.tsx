import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto px-6 text-center">
        <p className="mb-4">
          Developed with ❤️ by Cherif Tas
        </p>
        <div className="flex justify-center space-x-6 mb-4">
          <Link href="https://www.instagram.com/cherifsuii?igsh=Mml6MGlndmtobGJk" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            Instagram
          </Link>
          <Link href="https://www.linkedin.com/in/cherif-tas-7504b8319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            LinkedIn
          </Link>
          <Link href="https://t.me/Tascherif" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400">
            Telegram
          </Link>
        </div>
        <p className="text-sm text-gray-400">
          "I ask you to pray for me if you find this helpful." - Cherif Tas
        </p>
        <p className="text-sm text-gray-500 mt-6">
          © {new Date().getFullYear()} ENSTP Study. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
