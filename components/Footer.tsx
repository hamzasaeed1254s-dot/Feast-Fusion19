import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-semibold mb-4">Feast Fusion</h3>
            <p>Discover amazing products with affiliate links.</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/disclaimer">Disclaimer</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <p>Email: Hs9308721@gmail.com</p>
            <p>
              <a href="https://wa.me/923166396393">WhatsApp</a>
            </p>

            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/khadijacollection18">
                Instagram
              </a>
              <a href="https://www.facebook.com/share/17ThbWGGR3/">
                Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
