import React from "react";
import AppLayout from "../AppLayout";

function page() {
  return (
    <AppLayout allowedRoles={["admin"]}>
      <div>page</div>
    </AppLayout>
  );
}

export default page;
