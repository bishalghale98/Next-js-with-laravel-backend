import React from "react";
import AppLayout from "../(dashboard)/AppLayout";

function page() {
  return (
    <AppLayout allowedRoles={["user"]}>
      <div>page</div>
    </AppLayout>
  );
}

export default page;
