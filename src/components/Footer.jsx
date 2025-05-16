import React from 'react';

function Footer() {

  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4 grid gap-8 md:grid-cols-3">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4">About Task Manager</h3>
          <p className="text-gray-400">
            A simple and efficient way to manage your daily tasks and stay organized.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">All Tasks</a>
            </li>
            <li>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Pending Tasks</a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact</h3>
          <p className="text-gray-400">
            Have questions? Reach out to us at{' '}
            <a
              href="mailto:ankitpanditwork120@gmail.com"
              className="text-blue-400 hover:underline"
            >
              ankitpanditwork120@gmail.com
            </a>
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center mt-8 pt-8 border-t border-gray-700">
        <p className="text-gray-400 text-sm">
          © Task Manager. All rights reserved.
        </p>
        {/* Credit Line */}
        <p className="text-gray-500 text-sm mt-2">
          Made with ❤️ by{' '}
          <a
            href="https://x.com/ankitpanditin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-400 ml-1"
          >
            @ankitpanditin
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;