import React from "react";
import { useRouter } from "next/router";

function Profile() {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  const router = useRouter();
  const devId = parseInt(router.query.developerId);

  const developer = details.find((dev) => dev.id === devId);

  return (
    <div>
      {developer ? (
        <>
          <h1>{developer.name}</h1>
          <p>{developer.role}</p>
        </>
      ) : (
        <p>Developer does not exist</p>
      )}
    </div>
  );
}

export default Profile;
