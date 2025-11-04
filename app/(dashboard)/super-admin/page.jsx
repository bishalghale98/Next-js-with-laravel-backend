import React from "react";
import AppLayout from "../AppLayout";

function page() {
  return (
    <AppLayout allowedRoles={["super_admin"]}>
      <div>Super Admin Page</div>
      </AppLayout>
  );
}

export default page;
