import { Toaster } from "react-hot-toast";

function ToasterItem() {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      gutter={12}
      containerClassName=""
      containerStyle={{
        margin: "8px",
      }}
      toastOptions={{
        style: {
          fontSize: "16px",
          maxWidth: "500px",
          padding: "12px 16px",
          backgroundColor: "var(--color-brand-400)",
          color: "var(--color-brand-50)",
          zIndex: "999999999",
        },
        success: {
          duration: 3000,
        },
        error: {
          duration: 5000,
        },
      }}
    />
  );
}

export default ToasterItem;
