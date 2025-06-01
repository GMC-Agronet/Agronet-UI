// Server component for Next.js metadata for the landing page
export const metadata = {
  title: 'GMC AgroNet',
  description: 'Building the Digital Future for Sustainable Agriculture',
  icons: {
    icon: '/assets/images/gmclogo.svg',
    shortcut: '/assets/images/gmclogo.svg',
    apple: '/assets/images/gmclogo.svg',
  },
  openGraph: {
    title: 'GMC AgroNet',
    description: 'Building the Digital Future for Sustainable Agriculture',
    url: 'https://gmcagronet.netlify.app',
    siteName: 'GMC AgroNet',
    images: [
      {
        url: '/assets/images/gmclogo.svg',
        width: 400,
        height: 120,
        alt: 'GMC AgroNet Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'GMC AgroNet',
    description: 'Building the Digital Future for Sustainable Agriculture',
    images: ['/assets/images/gmclogo.svg'],
  },
};
