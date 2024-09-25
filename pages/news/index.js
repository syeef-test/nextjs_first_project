import React, { Fragment } from "react";
import Link from "next/link";

function NewsPage() {
  return (
    <Fragment>
      <h1>NewsPage</h1>
      <ul>
        <Link href="/news/nextjs-is-great-framework">
          <li>NextJS is great framework</li>
        </Link>

        <li>Somthing else</li>
        <li>NextJS is great framework</li>
      </ul>
    </Fragment>
  );
}

export default NewsPage;
