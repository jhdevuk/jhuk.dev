import { h, Fragment } from 'preact';
import style from './html.module.scss';

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  title?: string;
  cssPath?: string;
  jsPath?: string;
  children: any;
}

/* -----------------------------------
 *
 * Html
 *
 * -------------------------------- */

function Html({ title = '11ty', cssPath, jsPath, children }: IProps) {
  const scripts = ['vendor.js', jsPath, 'runtime.js'];

  return (
    <html lang="en" class={style.html}>
      <head>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta
          name="viewport"
          content="width=device-width, height=device-height, initial-scale=1"
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@100;300;400&display=swap"
          rel="stylesheet"
        ></link>
        {cssPath && <link rel="stylesheet" href={`/assets/${cssPath}`} />}
      </head>
      <body class={style.body}>
        {children}
        {jsPath && (
          <Fragment>
            {scripts.map((script) => (
              <script src={`/assets/${script}`} defer={true} />
            ))}
          </Fragment>
        )}
      </body>
    </html>
  );
}

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { Html };
