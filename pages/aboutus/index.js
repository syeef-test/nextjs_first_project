import React from "react";
import Link from "next/link";
function AboutUsPage() {
  return (
    <div>
      <h1>AboutUs Page</h1>
      <ul>
        <Link href="/aboutus/1">
          <li>Yash</li>
        </Link>
        <Link href="/aboutus/2">
          <li>Vaibhav</li>
        </Link>
        <Link href="/aboutus/3">
          <li>Suresh</li>
        </Link>
      </ul>
    </div>
  );
}

export default AboutUsPage;
