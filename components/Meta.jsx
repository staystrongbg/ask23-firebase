import Head from 'next/head';
import Script from 'next/script';
const Meta = ({ keywords, description, title }) => {
  return (
    <Head>
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <Script
        async
        src='https://www.googletagmanager.com/gtag/js?id=UA-227447780-1'
        strategy='afterInteractive'
      ></Script>
      <Script strategy='afterInteractive'>
        {`
        window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', ${process.env.GOOGLE_ANALYTICS});
      `}
      </Script>
      <link rel='icon' href='/favicon.ico' />
      <title>A C K 2 3 - {title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  keywords:
    'kućni ljubimci, hrana za pse, mačke, glodare, ribice i ptice, macke,psi,пси,мачке, рибице,птице, храна за кућне љубимце',
  description: 'Sve za vašeg kućnog ljubimca',
};

export default Meta;
