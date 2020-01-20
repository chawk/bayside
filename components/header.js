import Head from 'next/head';

export default (props) => (
  <div>
    <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="description" content={props.content} />
        <meta name="author" content={props.author} />
        <title>CodeHawke | {props.title}</title>
        <link href="/public/css/bootstrap.min.css" rel="stylesheet" />
        <link href="/public/css/main.css" rel="stylesheet" />
    </Head>
  </div>
)