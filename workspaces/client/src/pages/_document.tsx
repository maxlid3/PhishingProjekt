import { createGetInitialProps } from '@mantine/next';
import Document, { Head, Html, Main, NextScript } from 'next/document';

const getInitialProps = createGetInitialProps();

//TODO would rename _Document and change the import for Document to: import Document as DocumentBase or sth like that, cause underscores are usually for private attributes in classes
export default class _Document extends Document
{
  static getInitialProps = getInitialProps;

  render()
  {
    return (
      <Html>
        <Head/>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    );
  }
}