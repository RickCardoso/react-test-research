import Image from 'next/image'

const LandscapeImage = () => (
  <Image
    src="/images/lagoa.jpg" // Route of the image file
    height={144} // Desired size with correct aspect ratio
    width={144} // Desired size with correct aspect ratio
    alt="Lagoa"
  />
);